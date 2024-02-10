import { Component, OnInit } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent implements OnInit{
  punteggio: number = 0;
  constructor(private resultService: ResultServiceService){}
  ngOnInit(): void {
    this.punteggio = this.resultService.getPunteggio();
  }
}
