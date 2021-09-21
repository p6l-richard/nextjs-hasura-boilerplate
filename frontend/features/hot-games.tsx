import axios from "axios";
export interface IHotGame {
  id: number;
  rank: number;
  thumbnail: { value: string };
  name: { value: string };
  yearpublished: { value: number };
}
export async function getHotGames() {
  const { data } = await axios.get<IHotGame[]>(
    "http://localhost:3000/api/bgg/hot"
  );
  return data;
}

export {};
