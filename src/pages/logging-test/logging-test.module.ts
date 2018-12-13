import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoggingTestPage } from './logging-test';

@NgModule({
  declarations: [
    LoggingTestPage,
  ],
  imports: [
    IonicPageModule.forChild(LoggingTestPage),
  ],
})
export class LoggingTestPageModule {}
