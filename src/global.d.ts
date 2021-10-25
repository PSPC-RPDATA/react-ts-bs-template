import { LoDashStatic } from "lodash";

declare global {
  const _: LoDashStatic;
  const tdt: (s: string) => string;
  const lang: "en" | "fr";
  const other_lang: "en" | "fr";
}
interface Window {
  _: LoDashStatic;
  tdt: (s: string) => string;
  lang: "en" | "fr";
  other_lang: "en" | "fr";
}
