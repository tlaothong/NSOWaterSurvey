import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckListPage } from './check-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CheckListPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckListPage),
    ComponentsModule,
  ],
})
export class CheckListPageModule {}
