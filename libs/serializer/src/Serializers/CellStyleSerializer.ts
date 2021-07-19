import { Border, BorderPart, CellStyle } from "@xlsx-model/models";

export default class CellStyleSerializer {
  serializeBorderPart(borderPart: BorderPart | undefined): object | undefined {
    if (!borderPart) return undefined;

    return {
      width: borderPart.width,
      color: borderPart.color,
    };
  }

  serializeBorder(border: Border): object {
    let left = this.serializeBorderPart(border.left);
    let right = this.serializeBorderPart(border.right);
    let top = this.serializeBorderPart(border.top);
    let bottom = this.serializeBorderPart(border.bottom);

    return {
      left,
      right,
      top,
      bottom,
    };
  }

  serialize(cellStyle: CellStyle): object {
    let result = {
      fontSize: cellStyle.fontSize,
      textColor: cellStyle.textColor,
      fillColor: cellStyle.fillColor,
      border: {} as object,
    };

    result.border = this.serializeBorder(cellStyle.border);

    return result;
  }
}
