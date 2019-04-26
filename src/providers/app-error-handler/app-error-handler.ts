import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { Pro } from '@ionic/pro';
import { Platform } from 'ionic-angular/platform/platform';
import { Monitoring } from '@ionic/pro/dist/src/services/monitoring';

/*
  Generated class for the AppErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppErrorHandlerProvider implements ErrorHandler {
  private exErrorHandler: IonicErrorHandler;
  private monitoring: Monitoring;

  constructor(injector: Injector, private platform: Platform) {
    console.log('Hello AppErrorHandlerProvider Provider');
    try {
      if (this.platform.is("cordova")) {
        Pro.init('051dd5e2');
        Pro.monitoring.init();
        this.monitoring = Pro.monitoring;
        this.monitoring.log('Started Pro Monitoring', { level: "info" })
      }
      this.exErrorHandler = injector.get(IonicErrorHandler);
    } catch (error) {
      Pro.monitoring.exception(error);
    }
  }

  handleError(error: any): void {
    if (this.monitoring)
      this.monitoring.exception(error);
    this.exErrorHandler && this.exErrorHandler.handleError(error);
  }
}