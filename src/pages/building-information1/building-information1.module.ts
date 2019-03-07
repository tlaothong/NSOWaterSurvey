import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuildingInformation1Page } from './building-information1';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { BuildingTypes } from '../../states/building/building.actions';
import { reducer } from '../../states/building/building.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BuildingEffects } from '../../states/building/building.effects';

@NgModule({
  declarations: [
    BuildingInformation1Page,
  ],
  imports: [
    IonicPageModule.forChild(BuildingInformation1Page),
    ComponentsModule,
    StoreModule.forFeature(BuildingTypes.StateName, reducer),
    EffectsModule.forFeature([
      BuildingEffects
    ]),
  ],
})
export class BuildingInformation1PageModule {}
