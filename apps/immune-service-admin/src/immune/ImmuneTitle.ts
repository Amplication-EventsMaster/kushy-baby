import { Immune as TImmune } from "../api/immune/Immune";

export const IMMUNE_TITLE_FIELD = "id";

export const ImmuneTitle = (record: TImmune): string => {
  return record.id?.toString() || String(record.id);
};
