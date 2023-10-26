import { Patient } from "../patient/Patient";

export type Immune = {
  createdAt: Date;
  date: Date | null;
  id: string;
  patient?: Patient | null;
  updatedAt: Date;
};
