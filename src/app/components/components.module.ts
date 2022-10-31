import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeRouter } from '../home/home.router';



@NgModule({
  declarations: [StartComponent],
  exports:[StartComponent,IonicModule,HomeRouter],
  imports: [CommonModule ],
})
export class ComponentsModule { }
