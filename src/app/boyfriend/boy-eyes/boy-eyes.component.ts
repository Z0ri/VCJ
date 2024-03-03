import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boy-eyes',
  templateUrl: './boy-eyes.component.html',
  styleUrl: './boy-eyes.component.css'
})
export class BoyEyesComponent {
  @Output()
  eyesEmitter = new EventEmitter<string>();
  eyeColor = "";
  selectEyes(){
    this.eyesEmitter.emit(this.eyeColor);
  }
}
