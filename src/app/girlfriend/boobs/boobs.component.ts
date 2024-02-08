import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boobs',
  templateUrl: './boobs.component.html',
  styleUrl: './boobs.component.css'
})
export class BoobsComponent {
  @Output()
  boobsEmitter = new EventEmitter<string>();
  boobs = "";

  onRadioButtonChange($event: Event){
    this.boobs = ($event.target as HTMLInputElement).value;
    this.boobsEmitter.emit(this.boobs);
  }

}
