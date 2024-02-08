import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.css'
})
export class HairComponent {
  @Output()
  hairEmitter = new EventEmitter<string>();
  selectedHair: string = "";

  onRadioButtonChange(event: Event){
    this.selectedHair = (event.target as HTMLInputElement).value;
    this.hairEmitter.emit(this.selectedHair);
  }
}
