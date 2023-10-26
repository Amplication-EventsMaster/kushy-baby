import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type ImmuneWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  patient?: PatientWhereUniqueInput;
};
