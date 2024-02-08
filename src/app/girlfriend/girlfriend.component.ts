import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { AgeComponent } from './age/age.component';

@Component({
  selector: 'app-girlfriend',
  templateUrl: './girlfriend.component.html',
  styleUrl: './girlfriend.component.css'
})
export class GirlfriendComponent{
  @ViewChild(AgeComponent)
  child!: AgeComponent;

  age: number = 0;
  height: number = 0;
  hair: string = "";
  body: string = "";  //da fare
  boobs: string = "";
  eyeColor: string = ""; //da fare

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
    this.hair = value;
  }
  //ricezione corpo
  onBodyReceived(value: string){
    this.body = value;
  }
  //ricezione seno
  onBoobsReceived(value: string){
    this.boobs = value;
  }
  //Calcolo J
  public calculate(){
    console.log("age da girlfriendComponent: ",this.age);
    console.log("height da girlfriendComponent: ",this.height);
    console.log("hair da girlfriendComponent: ",this.hair);
    console.log("body da girlfriendComponent: ",this.body);
    console.log("boobs da girlfriendComponent: ",this.boobs);
  }
}
