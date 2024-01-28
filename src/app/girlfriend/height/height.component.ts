import { Component } from '@angular/core';

@Component({
  selector: 'app-height',
  templateUrl: './height.component.html',
  styleUrl: './height.component.css'
})
export class HeightComponent {
  formatLabel(value: number): string {
    return `${value}`;
  }
}
