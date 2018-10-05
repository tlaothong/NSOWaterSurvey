import { ModalGun2Page } from './../pages/modal-gun2/modal-gun2';
import { ModalGunPage } from './../pages/modal-gun/modal-gun';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { IrrigationPage } from '../pages/irrigation/irrigation';
import { RainPage } from '../pages/rain/rain';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IrrigationPage,
    RainPage , 
    ModalGunPage,
    ModalGun2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IrrigationPage,
    RainPage,
    ModalGunPage,
    ModalGun2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
