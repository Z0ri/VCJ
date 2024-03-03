import { Component, ViewChild } from '@angular/core';
import { ResultServiceService } from '../services/result-service.service';

@Component({
  selector: 'app-boyfriend',
  templateUrl: './boyfriend.component.html',
  styleUrl: './boyfriend.component.css'
})
export class BoyfriendComponent {
  constructor(private resultService: ResultServiceService){}
  
  age: number = 0;
  height: number = 100;
  hair: number = 0;
  body: number = 0;
  eyeColor: number = 0;

  //ricezione anni
  onAgeReceived(value: number){
    this.age = value;
  }
  //ricezione altezza
  onHeightReceived(value: number){
    this.height = value;
  }
  //ricezione capelli
  onHairReceived(value: string){
    this.hair = parseInt(value);
  }
  //ricezione corpo
  onBodyReceived(value: string){
    this.body = parseInt(value);
  }
  //ricezione occhi
  onEyesReceived(value: string){
    this.eyeColor = parseInt(value);
  }
  //Calcolo J
  public calculate(){
    let punteggio = this.age+(this.height-100)+this.hair+this.body+this.eyeColor;
    this.resultService.setPunteggio(punteggio);
    this.resultService.setResultGender("boyfriend");
  }
}
