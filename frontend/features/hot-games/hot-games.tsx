import axios from "axios";
import { useQuery } from "react-query";

// TYPES
export interface IHotGame {
  id: number;
  rank: number;
  thumbnail: string;
  name: string;
  yearpublished?: number;
}
export interface HotGamesResponse {
  items: { item: IHotGameResponse[] };
}
export interface IHotGameResponse {
  id: string;
  rank: string;
  thumbnail: string;
  name: string;
  yearpublished?: string;
}

// HOOKS
export async function getHotGames() {
  const { data } = await axios.get<IHotGame[]>(
    "http://localhost:3000/api/bgg/hot"
  );
  return data;
}
export const hotGamesKeys = {
  all: ["hotGames"] as const,
  lists: () => [...hotGamesKeys.all, "list"] as const,
  list: (filters: string) => [...hotGamesKeys.lists(), { filters }] as const,
};

export function useHotGamesQuery<T = IHotGame[]>(
  select?: (data: IHotGame[]) => T
) {
  return useQuery<IHotGame[], Error, T>(hotGamesKeys.lists(), getHotGames, {
    select,
  });
}

// BGG API
import { parseString } from "xml2js";
import { stripPrefix } from "xml2js/lib/processors";

export const BGG_API_URL = "https://api.geekdo.com/xmlapi2";

export async function parseXmlHotGames(xmlString: string): Promise<IHotGame[]> {
  return await new Promise((resolve, reject) =>
    parseString(
      xmlString,
      {
        mergeAttrs: true,
        trim: true,
        explicitArray: false,
        valueProcessors: [stripPrefix],
        validator: flattenValueAttributes,
      },
      (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(formatHotGamesResponse(result));
      }
    )
  );
}

function formatHotGamesResponse(result: HotGamesResponse): IHotGame[] {
  return result.items.item.map(({ id, rank, yearpublished, ...strings }) => {
    return {
      ...strings,
      id: parseInt(id),
      rank: parseInt(rank),
      yearpublished: parseInt(yearpublished),
    };
  });
}

function flattenValueAttributes(_, __, value: Record<string, string> | string) {
  // object assertion is required to narrow type
  const hasValueProperty =
    typeof value === "object" && value.hasOwnProperty("value");
  if (hasValueProperty) {
    return value.value;
  }
  return value;
}
