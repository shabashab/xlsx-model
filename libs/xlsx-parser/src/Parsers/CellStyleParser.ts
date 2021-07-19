import ICellStyleParser from "./Interfaces/ICellStyleParser";
import indexedColors from "@xlsx-model/indexed-colors";

import { Cell, Border as EJSBorder } from "@xlsx-model/excel";
import { CellStyle, Border, BorderPart } from "@xlsx-model/models";

export default class CellStyleParser implements ICellStyleParser {
  private static parseFillColor(cell: Cell): string | undefined {
    if (
      cell.style.fill?.type === "pattern" &&
      cell.style.fill.pattern !== "none"
    ) {
      if ((cell.style.fill.fgColor as any).hasOwnProperty("indexed")) {
        let indexedColorIndex = (cell.style.fill.fgColor as any)["indexed"];
        if (Math.min(indexedColorIndex, indexedColors.length - 1))
          return indexedColors[indexedColorIndex];
      }
      return "#" + cell.style.fill.fgColor?.argb;
    }
    return undefined;
  }

  private static parseBorderPart(
    border?: Partial<EJSBorder>,
  ): BorderPart | undefined {
    if (!border) return undefined;
    if (!border.style) return undefined;

    let borderPart = new BorderPart();

    switch (border.style) {
      case "thin":
        borderPart.width = 1;
        break;
      case "medium":
        borderPart.width = 2;
        break;
      case "thick":
        borderPart.width = 3;
        break;
      default:
        return undefined;
    }

    borderPart.color = border.color?.argb;
    return borderPart;
  }

  private static parseBorder(cell: Cell): Border {
    let border = new Border();

    if (!cell.border) return border;

    border.left = CellStyleParser.parseBorderPart(cell.border.left);
    border.right = CellStyleParser.parseBorderPart(cell.border.right);
    border.top = CellStyleParser.parseBorderPart(cell.border.top);
    border.bottom = CellStyleParser.parseBorderPart(cell.border.bottom);

    return border;
  }

  parse(cell: Cell): CellStyle {
    let cellStyle = new CellStyle();

    cellStyle.border = CellStyleParser.parseBorder(cell);
    cellStyle.fillColor = CellStyleParser.parseFillColor(cell);
    cellStyle.fontSize = cell.style.font?.size;
    cellStyle.textColor = cell.style.font?.color?.argb;

    return cellStyle;
  }
}
