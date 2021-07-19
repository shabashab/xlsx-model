export interface BorderPart {
  color?: string;
  width?: number;
}

export interface Border {
  right?: BorderPart;
  left?: BorderPart;
  top?: BorderPart;
  bottom?: BorderPart;
}

export interface CellStyle {
  fillColor?: string;
  textColor?: string;
  fontSize?: number;

  border: Border;
}
