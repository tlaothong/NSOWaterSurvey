import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitPage } from './unit';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HouseHoldEffects } from '../../states/household/household.effects';
import { HouseHoldTypes } from '../../states/household/household.actions';
import { reducer } from '../../states/household/household.reducer';

@NgModule({
  declarations: [
    UnitPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitPage),
    ComponentsModule,
    StoreModule.forFeature(HouseHoldTypes.StateName, reducer),
    EffectsModule.forFeature([
      HouseHoldEffects,
    ]),
  ],
})
export class UnitPageModule { }
