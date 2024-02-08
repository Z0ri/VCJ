import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrl: './age.component.css'
})
export class AgeComponent{
  age: number = 0;
  @Output() 
  ageEmitter = new EventEmitter<number>();

  formatLabel(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.age = parseInt(value);
    this.ageEmitter.emit(this.age);
  }
}
