import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrl: './calculating.component.css'
})
export class CalculatingComponent{
  constructor(private router: Router) {}
  onAnimationEnd() {
    this.router.navigate(['girlFriend/result']);
  }
}
