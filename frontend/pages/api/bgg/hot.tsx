import { parseString } from "xml2js";
interface IHotGame {
  id: number;
  rank: number;
  thumbnail: { value: string };
  name: { value: string };
  yearpublished: { value: number };
}
async function parseXml<T>(xmlString: string): Promise<T> {
  return await new Promise((resolve, reject) =>
    parseString(
      xmlString,
      { mergeAttrs: true, trim: true, explicitArray: false },
      (err, jsonData) => {
        if (err) {
          reject(err);
        }
        resolve(jsonData);
      }
    )
  );
}

export default async function hot(_, res) {
  const hotGamesResponse = await fetch(
    "https://api.geekdo.com/xmlapi2/hot?type=boardgame"
  );
  const hotGamesXml = await hotGamesResponse.text();
  const hotGames = await parseXml<{ items: { item: IHotGame[] } }>(hotGamesXml);
  if (!hotGames) {
    res.status(500);
  }
  return res.json(hotGames.items.item);
}
