import { Component, Output, SimpleChanges, ViewChild } from '@angular/core';
import { AgeComponent } from './age/age.component';
import { ResultServiceService } from '../services/result-service.service';

@Component({
  selector: 'app-girlfriend',
  templateUrl: './girlfriend.component.html',
  styleUrl: './girlfriend.component.css'
})
export class GirlfriendComponent{
  @ViewChild(AgeComponent)
  child!: AgeComponent;

  constructor(private resultService: ResultServiceService){}
  
  age: number = 0;
  height: number = 100;
  hair: number = 0;
  body: number = 0;  //da fare
  boobs: number = 0;
  eyeColor: number = 0; //da fare

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
  //ricezione seno
  onBoobsReceived(value: string){
    this.boobs = parseInt(value);
  }
  //ricezione occhi
  onEyesReceived(value: string){
    this.eyeColor = parseInt(value);
  }
  //Calcolo J
  public calculate(){
    let punteggio = this.age+(this.height-100)+this.hair+this.body+this.boobs+this.eyeColor;
    this.resultService.setPunteggio(punteggio);
  }
}
