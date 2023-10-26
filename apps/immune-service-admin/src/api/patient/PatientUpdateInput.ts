import { ImmuneUpdateManyWithoutPatientsInput } from "./ImmuneUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  dateOfBirth?: Date | null;
  immunes?: ImmuneUpdateManyWithoutPatientsInput;
  name?: string | null;
  phone?: string | null;
};
