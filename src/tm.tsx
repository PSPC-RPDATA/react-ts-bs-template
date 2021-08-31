import _ from "lodash";

// eslint-disable-next-line import/no-unresolved
import text from "!json-loader!yaml-loader!text/base_text.yaml";

type TextExtraArgs = Record<string, any>;

export function tm(key: string, args?: TextExtraArgs) {
  if (text[key]) {
    if (!text[key][window.lang]) {
      console.warn(`untranslated text key: ${key}`);
      return entryToText(text[key][window.other_lang], args);
    }

    return entryToText(text[key][window.lang], args);
  }
  console.warn(`undefined text key: ${key}`);
  return `TODO: ${key}`;
}
export function TM({ k, args }: { k: string; args?: TextExtraArgs }) {
  return tm(k, args);
}
export const tdt = (text: string) => text;

function entryToText(str, args) {
  return _.template(str)(args);
}

window.tm = tm;
window.tdt = tdt;

export default tm;
