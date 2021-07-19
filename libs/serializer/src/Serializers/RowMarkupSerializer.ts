import { RowMarkup } from "@xlsx-model/models";

export default class RowMarkupSerializer {
  serialize(rowMarkup: RowMarkup): object {
    return {
      collapsed: rowMarkup.collapsed,
      level: rowMarkup.level,
      height: rowMarkup.height,
    };
  }
}
