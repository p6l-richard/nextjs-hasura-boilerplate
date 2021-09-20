import IUser from "types/user";

export default interface IGame {
  id: string;
  created_at: string;
  name: string;
  description: string;
  bgg_id: number;
  image: string;
  user: IUser;
}
