import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { AgeComponent } from './age/age.component';

@Component({
  selector: 'app-girlfriend',
  templateUrl: './girlfriend.component.html',
  styleUrl: './girlfriend.component.css'
})
export class GirlfriendComponent{
  @ViewChild(AgeComponent)
  public child!: AgeComponent;

  public age: number = 5;

  constructor(private ageComponent: AgeComponent){}

  onSendData(value: string){
    console.log(value);
  }
  public calculate(){
    this.age = this.child.age;
    console.log("età da gf component: ",this.child.age);
  }

}
