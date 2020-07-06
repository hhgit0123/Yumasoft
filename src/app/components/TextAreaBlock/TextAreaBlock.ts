import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
} from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
  selector: "TextAreaBlock",
  templateUrl: "./TextAreaBlock.html",
})
export class TextAreaBlock implements OnChanges {
  formValue = new FormControl("");
  @Output() setDataEvent = new EventEmitter();
  @Input() data: any;
  setData(e) {
    e.preventDefault();
    this.setDataEvent.emit(this.formValue.value);
  }
  ngOnChanges() {
    this.formValue.setValue(JSON.stringify(this.data));
  }
}
