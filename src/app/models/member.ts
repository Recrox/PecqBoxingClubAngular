import { License } from "./license";

export interface Member {
  id: number;
  name: string;
  firstName: string;
  age: number;
  license: License | null;
  solde: number;
}