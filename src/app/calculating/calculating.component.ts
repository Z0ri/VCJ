import { Component } from '@angular/core';
@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrl: './calculating.component.css'
})
export class CalculatingComponent{
  onAnimationEnd() {
    window.location.href = 'girlFriend/result';
  }
}
