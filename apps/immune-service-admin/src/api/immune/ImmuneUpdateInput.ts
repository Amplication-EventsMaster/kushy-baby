import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ImmuneUpdateInput = {
  date?: Date | null;
  patient?: PatientWhereUniqueInput | null;
};
