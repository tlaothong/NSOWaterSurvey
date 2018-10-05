import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalGunPage } from './modal-gun';

@NgModule({
  declarations: [
    ModalGunPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalGunPage),
  ],
})
export class ModalGunPageModule {}
