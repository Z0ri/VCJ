import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boy-age',
  templateUrl: './boy-age.component.html',
  styleUrl: './boy-age.component.css'
})
export class BoyAgeComponent {
  age: number = 0;
  @Output() 
  ageEmitter = new EventEmitter<number>();

  formatLabel(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.age = parseInt(value);
    this.ageEmitter.emit(this.age);
  }
}
