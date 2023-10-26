import { ImmuneWhereInput } from "./ImmuneWhereInput";
import { ImmuneOrderByInput } from "./ImmuneOrderByInput";

export type ImmuneFindManyArgs = {
  where?: ImmuneWhereInput;
  orderBy?: Array<ImmuneOrderByInput>;
  skip?: number;
  take?: number;
};
