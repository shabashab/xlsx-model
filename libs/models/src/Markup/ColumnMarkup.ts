export default class ColumnMarkup {
  public width?: number;
  public level?: number;
  public collapsed?: boolean;

  constructor(width?: number, level?: number, collapsed?: boolean) {
    this.width = width;
    this.level = level;
    this.collapsed = collapsed;
  }
}
