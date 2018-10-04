import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResidentialPage } from './residential';

@NgModule({
  declarations: [
    ResidentialPage,
  ],
  imports: [
    IonicPageModule.forChild(ResidentialPage),
  ],
})
export class ResidentialPageModule {}
