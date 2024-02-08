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
  //ricezione anni
  onAgeReceived(value: number){
    console.log(value);
    this.age = value;
  }
  //ricezione altezza
  onHeightReceived(value: number){
    console.log(value);
    this.height = value;
  }
  //ricezione capelli
  onHairReceived(value: string){
    console.log(value);
    this.hair = value;
  }
  //Calcolo J
  public calculate(){
    console.log("age da girlfriendComponent: ",this.age);
    console.log("height da girlfriendComponent: ",this.height);
    console.log("hair da girlfriendComponent: ",this.hair);

  }
}
