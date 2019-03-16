import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { ComponentsModule } from '../../components/components.module';
import { StoreModule } from '@ngrx/store';
import { BootupTypes } from '../../states/bootup/bootup.actions';
import { reducer } from '../../states/bootup/bootup.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BootupEffects } from '../../states/bootup/bootup.effects';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    StoreModule.forFeature(BootupTypes.StateName, reducer),
    EffectsModule.forFeature([
      BootupEffects
    ]),
  ],
})
export class LoginPageModule {}
