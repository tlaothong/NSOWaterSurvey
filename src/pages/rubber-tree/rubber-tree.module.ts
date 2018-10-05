import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RubberTreePage } from './rubber-tree';

@NgModule({
  declarations: [
    RubberTreePage,
  ],
  imports: [
    IonicPageModule.forChild(RubberTreePage),
  ],
})
export class RubberTreePageModule {}
