import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GirlfriendComponent } from './girlfriend/girlfriend.component';
import { HairComponent } from './girlfriend/hair/hair.component';
import { AgeComponent } from './girlfriend/age/age.component';
import { HeightComponent } from './girlfriend/height/height.component';
import { BodyComponent } from './girlfriend/body/body.component';
import { BoobsComponent } from './girlfriend/boobs/boobs.component';
import { EyesComponent } from './girlfriend/eyes/eyes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GirlfriendComponent,
    HairComponent,
    AgeComponent,
    HeightComponent,
    BodyComponent,
    BoobsComponent,
    EyesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
