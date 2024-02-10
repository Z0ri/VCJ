import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {
  private punteggio: number = 1;

  public getPunteggio(): number{
    return this.punteggio;
  }
  public setPunteggio(punteggio: number){
    this.punteggio = punteggio;
  }
  constructor() { }
}
