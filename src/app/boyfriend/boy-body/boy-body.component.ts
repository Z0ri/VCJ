import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boy-body',
  templateUrl: './boy-body.component.html',
  styleUrl: './boy-body.component.css'
})
export class BoyBodyComponent {
  @Output()
  bodyEmitter = new EventEmitter<string>();
  bodyType: string = "";
  selectBody() {
    this.bodyEmitter.emit(this.bodyType);
  }
}
