import { parseXmlHotGames, BGG_API_URL } from "features/hot-games";

export default async function hot(_, res) {
  const response = await fetch(BGG_API_URL + "/hot?type=boardgame");
  const responseXml = await response.text();
  const hotGames = await parseXmlHotGames(responseXml);
  if (!hotGames) {
    res.status(500);
  }
  return res.json(hotGames);
}
