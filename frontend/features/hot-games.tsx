import axios from "axios";
import { useQuery } from "react-query";
export interface IHotGame {
  id: string;
  rank: string;
  thumbnail: { value: string };
  name: { value: string };
  yearpublished?: { value: string };
}
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
