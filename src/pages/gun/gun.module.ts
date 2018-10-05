import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GunPage } from './gun';

@NgModule({
  declarations: [
    GunPage,
  ],
  imports: [
    IonicPageModule.forChild(GunPage),
  ],
})
export class GunPageModule {}
