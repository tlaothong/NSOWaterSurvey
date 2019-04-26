import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertController } from 'ionic-angular';
import { getCurrentWorkingEA } from '../../states/bootup';
import { BootupState } from '../../states/bootup/bootup.reducer';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  selector: 'questionnaire-home',
  templateUrl: 'questionnaire-home.html'
})

export class QuestionnaireHomeComponent {

  public currentEA$ = this.store.select(getCurrentWorkingEA);

  constructor(private store: Store<BootupState>, private navCtrl: NavController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  
  public openMap() {
    const mapPage = 'EaMapPage';
    const ea$ = this.currentEA$.take(1).subscribe(ea => {
      if (ea.Center) {
        this.navCtrl.push(mapPage, { lat: ea.Center[0].value[1], lng: ea.Center[0].value[0] });
      } else {
        const alertNoMap = this.alertCtrl.create({
          title: "ไม่มีแผนที่",
          message: "ไม่พบแผนที่สำหรับ EA นี้ ระบบไม่สามารถแสดงแผนที่ได้",
          buttons: ["ตกลง"],
        });
        alertNoMap.present();
      }
    });
  }


}
