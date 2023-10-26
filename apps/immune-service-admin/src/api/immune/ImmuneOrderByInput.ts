import { SortOrder } from "../../util/SortOrder";

export type ImmuneOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
