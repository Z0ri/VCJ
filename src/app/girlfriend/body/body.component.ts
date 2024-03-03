import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Output()
  bodyEmitter = new EventEmitter<string>();
  bodyType: string = "";
  selectBody() {
    this.bodyEmitter.emit(this.bodyType);
  }
}
