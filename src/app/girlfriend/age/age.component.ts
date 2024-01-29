import { Component, Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrl: './age.component.css'
})
export class AgeComponent {
  @Output() sendData = new EventEmitter<any>();

  public age: number = 0;

  formatLabel(value: number): string {
      this.age = value;
      this.sendData.emit(value.toString());
      return `${value}`;
  }
}
