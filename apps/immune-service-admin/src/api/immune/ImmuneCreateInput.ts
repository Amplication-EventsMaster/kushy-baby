import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ImmuneCreateInput = {
  date?: Date | null;
  patient?: PatientWhereUniqueInput | null;
};
