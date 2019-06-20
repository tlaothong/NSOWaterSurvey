import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-export-file',
  templateUrl: 'export-file.html',
})
export class ExportFilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, private storage: Storage,
    private alert: AlertController, private load: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExportFilePage');
  }

  exportJSON() {
    let alertFail = this.alert.create({
      title: 'ไม่พบหน่วยความจำภายนอก',
      buttons: ['ตกลง'],
    });

    let success = this.alert.create({
      title: 'สำรองข้อมูลไปยังหน่วยความจำภายนอกเรียบร้อยแล้ว',
      buttons: ['ตกลง'],
    });

    let load = this.load.create({
      content: 'กำลังสำรองข้อมูลไปยังหน่วยความจำภายนอก',
      enableBackdropDismiss: false,
    });

    load.present();
    let directory = this.file.dataDirectory;
    let folder = 'Water';
    this.file.checkDir(directory, folder)
      .then(en => {
        if (en == true) {
          this.storage.keys().then(val => {
            let keys = val;
            console.log(keys);
            for (let k of keys) {
              if (k.startsWith('ulogin1v')) {
                continue; // ignore login file
              }
              let fileName = k + '.txt';
              if (k.startsWith('bld1v') || k.startsWith('unt1v') || k.startsWith('bld2v') || k.startsWith('unt2v')) {
                this.storage.get(k).then(val => {
                  let txt = val;
                  let fileData = JSON.stringify(txt);
                  this.file.writeFile(directory + '/' + folder, fileName, fileData)
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
        } else {
          this.file.createDir(directory, folder, true)
            .then(en => {
              this.storage.keys().then(val => {
                let keys = val;
                for (let k of keys) {
                  if (k.startsWith('ulogin1v')) {
                    continue; // ignore login file
                  }
                  if (k.startsWith('bld1v') || k.startsWith('unt1v') || k.startsWith('bld2v') || k.startsWith('unt2v')) {
                    this.storage.get(k).then(val => {
                      let txt = val;
                      let fileName = k + '.txt';
                      let fileData = JSON.stringify(txt);
                      this.file.writeFile(directory + '/' + folder, fileName, fileData)
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
            }).catch((error) => {
              load.dismiss();
              alertFail.present();
            })
        }
      })
      .catch((error) => {
        load.dismiss();
        alertFail.present();
      })
  }

  exportCSV() {
    let alertFail = this.alert.create({
      title: 'ไม่พบหน่วยความจำภายนอก',
      buttons: ['ตกลง'],
    });

    let load = this.load.create({
      content: 'กำลังสำรองข้อมูลไปยังหน่วยความจำภายนอก',
      enableBackdropDismiss: false,
    });
    let success = this.alert.create({
      title: 'สำรองข้อมูลไปยังหน่วยความจำภายนอกเรียบร้อยแล้ว',
      buttons: ['ตกลง'],
    });

    load.present();
    let directory = this.file.dataDirectory;
    let folder = 'Water';
    this.file.checkDir(directory, folder)
      .then(en => {
        if (en == true) {
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
                  this.file.writeFile(directory + '/' + folder, fileName, fileData)
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
        } else {
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
                      this.file.writeFile(directory + '/' + folder, fileName, fileData)
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
      }).catch((error) => {
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
    let alert = this.alert.create({
      message: 'templete error invalid feild!!!',
      buttons: ['ตกลง']
    });
    alert.present();
  }

}
