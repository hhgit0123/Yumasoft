import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { App } from "./App";
import { TextAreaBlock } from "./components/TextAreaBlock/TextAreaBlock";
import { TableBlock } from "./components/TableBlock/TableBlock";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  declarations: [App, TextAreaBlock, TableBlock],
  bootstrap: [App],
})
export class AppModule {}
