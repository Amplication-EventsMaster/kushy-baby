import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ImmuneListRelationFilter } from "../immune/ImmuneListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PatientWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  id?: StringFilter;
  immunes?: ImmuneListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
