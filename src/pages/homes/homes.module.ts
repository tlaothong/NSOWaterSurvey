import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomesPage } from './homes';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { BuildingTypes } from '../../states/building/building.actions';
import { EffectsModule } from '@ngrx/effects';
import { BuildingEffects } from '../../states/building/building.effects';
import { reducer } from '../../states/building/building.reducer';

@NgModule({
  declarations: [
    HomesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomesPage),
    ComponentsModule,
    StoreModule.forFeature(BuildingTypes.StateName, reducer),
    EffectsModule.forFeature([
      BuildingEffects
    ]),
  ],

})
export class HomesPageModule { }
