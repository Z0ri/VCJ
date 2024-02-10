import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculating',
  templateUrl: './calculating.component.html',
  styleUrl: './calculating.component.css'
})
export class CalculatingComponent implements OnInit{
  loading = true;

  constructor(){}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
  
}
