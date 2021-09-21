import type { NextApiRequest, NextApiResponse } from "next";
import xml2js from "xml2js";

export async function parseXml(xmlString: string) {
  return await new Promise((resolve, reject) =>
    xml2js.parseString(xmlString, { mergeAttrs: true }, (err, jsonData) => {
      if (err) {
        reject(err);
      }
      resolve(jsonData);
    })
  );
}

/**
 * Exposes board-game-geek API to `feature-hot-games`
 * @returns list of hot boardgames as JSON from board-game-geek API
 */
export default async function hot(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(
    `https://api.geekdo.com/xmlapi2/hot?type=boardgame`
  );
  const data = await response.text();
  if (!data) {
    return res.status(500);
  }
  const hotGames = await parseXml(data);
  return res.json(hotGames);
}
