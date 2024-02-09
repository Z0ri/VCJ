import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrl: './eyes.component.css'
})
export class EyesComponent {
  @Output()
  eyesEmitter = new EventEmitter<string>();
  eyeColor = "";
  selectEyes(){
    this.eyesEmitter.emit(this.eyeColor);
  }
}
