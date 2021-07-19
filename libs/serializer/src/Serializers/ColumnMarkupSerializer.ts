import { ColumnMarkup } from "@xlsx-model/models";

export default class ColumnMarkupSerializer {
  serialize(columnMarkup: ColumnMarkup): object {
    return {
      width: columnMarkup.width,
      level: columnMarkup.level,
      collapsed: columnMarkup.collapsed,
    };
  }
}
