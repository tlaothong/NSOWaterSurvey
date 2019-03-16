import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstpagePage } from './firstpage';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoggingTypes } from '../../states/logging/logging.actions';
import * as log from '../../states/logging/logging.reducer';
import { LoggingEffects } from '../../states/logging/logging.effects';
import { BootupTypes } from '../../states/bootup/bootup.actions';
import { BootupEffects } from '../../states/bootup/bootup.effects';
import * as boot from '../../states/bootup/bootup.reducer';
import { BuildingTypes } from '../../states/building/building.actions';
import { BuildingEffects } from '../../states/building/building.effects';
import * as bld from '../../states/building/building.reducer';
import { HouseHoldTypes } from '../../states/household/household.actions';
import { HouseHoldEffects } from '../../states/household/household.effects';
import * as house from '../../states/household/household.reducer';
import { CommunityTypes } from '../../states/community/community.actions';
import { CommunityEffects } from '../../states/community/community.effects';
import * as comm from '../../states/community/community.reducer';

@NgModule({
  declarations: [
    FirstpagePage,
  ],
  imports: [
    IonicPageModule.forChild(FirstpagePage),
    ComponentsModule,
    StoreModule.forFeature(BootupTypes.StateName, boot.reducer),
    StoreModule.forFeature(LoggingTypes.StateName, log.reducer),
    StoreModule.forFeature(BuildingTypes.StateName, bld.reducer),
    StoreModule.forFeature(HouseHoldTypes.StateName, house.reducer),
    StoreModule.forFeature(CommunityTypes.StateName, comm.reducer),
    EffectsModule.forFeature([
      BootupEffects,
      LoggingEffects,
      BuildingEffects,
      HouseHoldEffects,
      CommunityEffects,
    ])
  ],
})
export class FirstpagePageModule {}
