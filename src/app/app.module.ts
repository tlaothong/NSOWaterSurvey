
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';


import { ComponentsModule } from '../components/components.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CloudSyncProvider } from '../providers/cloud-sync/cloud-sync';
import { PumpDataProvider } from '../providers/pump-data/pump-data';
import { LocationDataProvider } from '../providers/location-data/location-data';
import { SwithStateProvider } from '../providers/swith-state/swith-state';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "NSO Water Survey",
      maxAge: 25,
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CloudSyncProvider,
    PumpDataProvider,
    LocationDataProvider,
    SwithStateProvider,
  ]
})
export class AppModule { }
  