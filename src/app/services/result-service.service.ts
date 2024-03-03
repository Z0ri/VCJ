import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {
  private punteggio: number = 1;
  private resultGender: string = "";

  public getPunteggio(): number{
    return this.punteggio;
  }
  public setPunteggio(punteggio: number){
    this.punteggio = punteggio;
  }
  public getResultGender(){
    return this.resultGender;
  }
  public setResultGender(gender: string){
    this.resultGender = gender;
  }
  constructor() { }
}
