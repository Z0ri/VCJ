import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResultServiceService } from '../services/result-service.service';
@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrl: './calculating.component.css'
})
export class CalculatingComponent{
  constructor(private router: Router, private resultService: ResultServiceService) {}
  onAnimationEnd() {
    console.log(this.resultService.getResultGender());
    if(this.resultService.getResultGender() == "boyfriend"){
      this.router.navigate(['boyFriend/result']);
    }else if(this.resultService.getResultGender() == "girlfriend"){
      this.router.navigate(['girlFriend/result']);
    }
  }
}
