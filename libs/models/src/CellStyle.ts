export class BorderPart {
  public color?: string;
  public width?: number;
}

export class Border {
  public right?: BorderPart;
  public left?: BorderPart;
  public top?: BorderPart;
  public bottom?: BorderPart;
}

export default class CellStyle {
  public fillColor?: string;
  public textColor?: string;
  public fontSize?: number;

  public border: Border;

  constructor(border?: Border) {
    this.border = border || new Border();
  }
}
