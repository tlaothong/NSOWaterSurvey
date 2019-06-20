import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular/platform/platform';

@IonicPage()
@Component({
  selector: 'page-export-file',
  templateUrl: 'export-file.html',
})
export class ExportFilePage {

  public storageDirectory: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, private storage: Storage,
    private alert2: AlertController, private load: LoadingController, private plt: Platform) {
    this.plt.ready().then(() => {
      if (this.plt.is('ios')) {
        alert("IOS")
      }
      else if (this.plt.is('android')) {
        this.storageDirectory = this.file.externalRootDirectory;
      }
      else {
        return false;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExportFilePage');
  }

  exportJSON() {
    let alertFail = this.alert2.create({
      title: 'ไม่พบหน่วยความจำภายนอก',
      buttons: ['ตกลง'],
    });

    let success = this.alert2.create({
      title: 'สำรองข้อมูลไปยังหน่วยความจำภายนอกเรียบร้อยแล้ว',
      buttons: ['ตกลง'],
    });

    let load = this.load.create({
      content: 'กำลังสำรองข้อมูลไปยังหน่วยความจำภายนอก',
      enableBackdropDismiss: false,
    });

    load.present();
    let directory = this.storageDirectory;
    let folder = 'Water';
    this.file.createDir(directory, folder, true)
      .then(en => {
        this.storage.keys().then(val => {
          let keys = val;
          for (let k of keys) {
            if (k.startsWith('ulogin1v')) {
              continue; // ignore login file
            }
            this.storage.get(k).then(val => {
              let txt = val;
              let fileName = k + '.txt';
              let fileData = JSON.stringify(txt);
              this.file.writeFile(directory + '/' + folder, fileName, fileData, { replace: true })
                .then((en) => {
                })
                .catch((error) => {
                  load.dismiss();
                  alertFail.present();
                })
            })

            load.dismiss();
            success.present();
          }
        })
      }).catch((error) => {
        load.dismiss();
        alertFail.present();
      })
  }

  exportCSV() {
    let alertFail = this.alert2.create({
      title: 'ไม่พบหน่วยความจำภายนอก',
      buttons: ['ตกลง'],
    });

    let load = this.load.create({
      content: 'กำลังสำรองข้อมูลไปยังหน่วยความจำภายนอก',
      enableBackdropDismiss: false,
    });
    let success = this.alert2.create({
      title: 'สำรองข้อมูลไปยังหน่วยความจำภายนอกเรียบร้อยแล้ว',
      buttons: ['ตกลง'],
    });

    load.present();
    let directory = this.storageDirectory;
    let folder = 'Water';
    this.file.createDir(directory, folder, true)
      .then(en => {
        this.storage.keys().then(val => {
          let keys = val;
          for (let k of keys) {
            if (k.startsWith('ulogin1v')) {
              continue; // ignore login file
            }
            if (k.startsWith('bldlst1v') || k.startsWith('unt4b1v') || k.startsWith('bldlst2v') || k.startsWith('unt4b2v')) {
              this.storage.get(k).then(val => {
                let txt = val;
                let fileData = this.convertJsonToCsv(txt);
                let fileName = k + '.csv';
                this.file.writeFile(directory + '/' + folder, fileName, fileData, { replace: true })
                  .then((en) => {

                  })
                  .catch((error) => {
                    load.dismiss();
                    alertFail.present();
                  })
              })
            }
            load.dismiss();
            success.present();
          }
        })
      })
      .catch((error) => {
        load.dismiss();
        alertFail.present();
      })
  }

  convertJsonToCsv(fileData) {
    var array = typeof fileData != 'object' ? JSON.parse(fileData) : fileData;
    console.log(array);
    var str = '';
    var row = "";
    for (var index in array[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    console.log(str);
    return str;
  }

  import() {
    let alert = this.alert2.create({
      message: 'ความสามารถนี้อยู่ใน Manu ส่งงาน',
      buttons: ['ตกลง']
    });
    alert.present();
  }

}
