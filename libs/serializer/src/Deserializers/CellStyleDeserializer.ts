import { Border, BorderPart, CellStyle } from "@xlsx-model/models";

export default class CellStyleDeserializer {
  private static deserializeBorderPart(
    borderPartObject: any,
  ): BorderPart | undefined {
    if (!borderPartObject) return undefined;
    let borderPart = new BorderPart();

    borderPart.width = borderPartObject.width;
    borderPart.color = borderPartObject.color;

    return borderPart;
  }

  private static deserializeBorder(borderObject: any): Border {
    let border = new Border();

    border.left = CellStyleDeserializer.deserializeBorderPart(
      borderObject.left,
    );
    border.right = CellStyleDeserializer.deserializeBorderPart(
      borderObject.right,
    );
    border.top = CellStyleDeserializer.deserializeBorderPart(borderObject.top);
    border.bottom = CellStyleDeserializer.deserializeBorderPart(
      borderObject.bottom,
    );

    return border;
  }

  deserialize(objectToDeserialize: any): CellStyle {
    let cellStyle = new CellStyle();
    if (!objectToDeserialize) return cellStyle;

    cellStyle.fillColor = objectToDeserialize.fillColor;
    cellStyle.textColor = objectToDeserialize.textColor;
    cellStyle.fontSize = objectToDeserialize.fontSize;

    cellStyle.border = CellStyleDeserializer.deserializeBorder(
      objectToDeserialize.border,
    );

    return cellStyle;
  }
}
