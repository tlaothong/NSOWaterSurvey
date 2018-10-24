import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailWaterManagementPage } from './detail-water-management';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailWaterManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailWaterManagementPage),
    ComponentsModule,
  ],
})
export class DetailWaterManagementPageModule {}
