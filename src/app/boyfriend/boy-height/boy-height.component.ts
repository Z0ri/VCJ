import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boy-height',
  templateUrl: './boy-height.component.html',
  styleUrl: './boy-height.component.css'
})
export class BoyHeightComponent {
  height: number = 0;
  @Output() 
  heightEmitter = new EventEmitter<number>();

  formatLabel(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.height = parseInt(value);
    this.heightEmitter.emit(this.height);
  }
}
