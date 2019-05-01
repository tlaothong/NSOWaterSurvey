
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner } from '@ionic-native/qr-scanner';
import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';

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
import { DirectivesModule } from '../directives/directives.module';
import { DataStoreProvider } from '../providers/data-store/data-store';
import { AppStateProvider } from '../providers/app-state/app-state';
import { AppErrorHandlerProvider } from '../providers/app-error-handler/app-error-handler';
import { OneSignal } from '@ionic-native/onesignal';

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
    DirectivesModule,
    IonicStorageModule.forRoot({
      // name: 'User',
    }),
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
    OneSignal,
    Geolocation,
    IonicErrorHandler,
    Device,
    // { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: ErrorHandler, useClass: AppErrorHandlerProvider },
    CloudSyncProvider,
    PumpDataProvider,
    LocationDataProvider,
    DataStoreProvider,
    AppStateProvider,    
  ]
})
export class AppModule { }
