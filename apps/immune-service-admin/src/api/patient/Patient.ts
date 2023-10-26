import { Immune } from "../immune/Immune";

export type Patient = {
  createdAt: Date;
  dateOfBirth: Date | null;
  id: string;
  immunes?: Array<Immune>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
