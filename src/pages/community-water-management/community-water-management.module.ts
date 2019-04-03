import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { CommunityWaterManagementPage } from './community-water-management';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CommunityWaterManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(CommunityWaterManagementPage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class CommunityWaterManagementPageModule {}
