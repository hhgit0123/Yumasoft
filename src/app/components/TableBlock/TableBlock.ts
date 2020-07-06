import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "TableBlock",
  templateUrl: "./TableBlock.html",
})
export class TableBlock {
  @Input() data: any;
  @Output() setDataEvent = new EventEmitter();
  tableData = [];
  thList = [];
  tdList = [];
  setData(e) {
    e.preventDefault();
    this.setDataEvent.emit(this.tableData);
  }
  handleChange(e, positon) {
    let { rowIndex, colIndex } = positon;
    let colName = this.thList[colIndex];
    this.tableData[rowIndex][colName] = e.target.value;
  }
  ngOnChanges() {
    this.tableData = this.data;
    this.thList = Object.keys(this.data[0]);
    this.tdList = this.data.map((x) => Object.values(x));
  }
}
