import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectEaPage } from './select-ea';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SelectEaPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectEaPage),
    ComponentsModule,
  ],
})
export class SelectEaPageModule {}
