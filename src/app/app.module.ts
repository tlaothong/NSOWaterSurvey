import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlowerCropPage } from '../pages/flower-crop/flower-crop';
import { HerbsPlantPage } from '../pages/herbs-plant/herbs-plant';
import { AnimalFarmPage } from '../pages/animal-farm/animal-farm';
import { BuyingPage } from '../pages/buying/buying';
import { DisasterousPage } from '../pages/disasterous/disasterous';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // FlowerCropPage,
    // HerbsPlantPage,
    // AnimalFarmPage,
    BuyingPage,
    DisasterousPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    // FlowerCropPage,
    // HerbsPlantPage,
    // AnimalFarmPage,
    BuyingPage,
    DisasterousPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
