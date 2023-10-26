import { ImmuneCreateNestedManyWithoutPatientsInput } from "./ImmuneCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  dateOfBirth?: Date | null;
  immunes?: ImmuneCreateNestedManyWithoutPatientsInput;
  name?: string | null;
  phone?: string | null;
};
