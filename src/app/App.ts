import { Component } from "@angular/core";
import { NgxCsvParser } from "ngx-csv-parser";
import { NgxCSVParserError } from "ngx-csv-parser";
@Component({ selector: "App", templateUrl: "./App.html" })
export class App {
  constructor(private ngxCsvParser: NgxCsvParser) {}
  data = [{}];
  setData(newData: any) {
    let newDataArray = eval(newData); //из str в [][]
    this.data = [...[newDataArray][0]];
  }
  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    this.ngxCsvParser
      .parse(files[0], { header: false, delimiter: "," })
      .pipe()
      .subscribe(
        (result: Array<any>) => {
          let keysList = result[0]; //первая строка csv - keys
          result.shift();
          let newData = [];
          //из [[],[]] в [{},{}]
          newData = result.map(function (row) {
            let obj = {};
            row.map(function (value, index) {
              let key = keysList[index];
              obj[key] = value;
            });
            return obj;
          });
          this.data = newData;
        },
        (error: NgxCSVParserError) => {
          console.log("Error", error);
        }
      );
  }
}
