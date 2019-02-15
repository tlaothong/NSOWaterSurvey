import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggingTestPage } from './logging-test';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { LoggingTypes } from '../../states/logging/logging.actions';
import { reducer } from '../../states/logging/logging.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoggingEffects } from '../../states/logging/logging.effects';

@NgModule({
  declarations: [
    LoggingTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggingTestPage),
    ComponentsModule,
    StoreModule.forFeature(LoggingTypes.StateName, reducer),
    EffectsModule.forFeature([
      LoggingEffects,
    ])
  ],
  providers: [
  ]
})
export class LoggingTestPageModule { }
