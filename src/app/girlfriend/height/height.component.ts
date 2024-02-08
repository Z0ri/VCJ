import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrl: './height.component.css'
})
export class HeightComponent {
  height: number = 0;
  @Output() 
  heightEmitter = new EventEmitter<number>();

  formatLabel(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.height = parseInt(value);
    this.heightEmitter.emit(this.height);
  }
}
