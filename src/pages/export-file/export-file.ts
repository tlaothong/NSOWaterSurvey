import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file/ngx';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-export-file',
  templateUrl: 'export-file.html',
})
export class ExportFilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private file: File, private storage: Storage,
    private alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExportFilePage');
  }

  exportJSON() {
    this.storage.keys().then(val => {
      let keys = val;
      console.log(keys);
      let alert = this.alert.create({
        title: 'ไม่พบหน่วยความจำภายนอก',
        buttons: ['ตกลง'],
      })
      for (let k of keys) {
        if (k.startsWith('ulogin1v')) {
          continue; // ignore login file
        }
        console.log(k);

        this.storage.get(k).then(val => {
          let txt = val;
          let fileName = k + '.txt';
          let fileData = JSON.stringify(txt);
          const ROOT_DIRECTORY = 'file:///sdcard//';
          const folderName = 'water';
          console.log(txt);
          console.log(fileName);
          console.log(fileData);
          this.file.createFile(this.file.applicationDirectory + "www/assets/", fileName, true)
            .then((en) => {
              this.file.writeFile(this.file.applicationDirectory + "www/assets/", fileName, fileData)
                .then((en) => {
                  //Create a folder in memory location
                  this.file.createDir(ROOT_DIRECTORY, folderName, true)
                    .then((entries) => {
                      //Copy our asset/img/FreakyJolly.jpg to folder we created
                      this.file.copyFile(this.file.applicationDirectory + "www/assets/", fileName, ROOT_DIRECTORY + folderName + '//', fileName)
                        .then((entries) => {

                        })
                        .catch((error) => {
                          alert.present();
                        });
                    })
                    .catch((error) => {
                      alert.present();
                    });
                })
                .catch((error) => {
                  alert.present();
                })
            })
            .catch((error) => {
              alert.present();
            })

        });
      }
    });
  }

  exportCSV() {
    this.storage.keys().then(val => {
      let keys = val;
      console.log(keys);

      let bld = [];
      let unt = [];
      let alert = this.alert.create({
        title: 'ไม่พบหน่วยความจำภายนอก',
        buttons: ['ตกลง'],
      })
      for (let k of keys) {
        if (k.startsWith('ulogin1v')) {
          continue; // ignore login file
        }
        console.log(k);
        if (k.startsWith('unt1v')) {
          this.storage.get(k).then(val => {
            let txt = val;
            let fileName = k + '.txt';
            let fileData = JSON.stringify(txt);
            const ROOT_DIRECTORY = 'file:///sdcard//';
            const folderName = 'water';
            console.log(txt);
            console.log(fileName);
            unt.push(txt);
            this.file.createFile(this.file.applicationDirectory + "www/assets/", fileName, true)
              .then((en) => {
                this.file.writeFile(this.file.applicationDirectory + "www/assets/", fileName, this.convertJsonToCsv(unt))
                  .then((en) => {
                    //Create a folder in memory location
                    this.file.createDir(ROOT_DIRECTORY, folderName, true)
                      .then((entries) => {
                        //Copy our asset/img/FreakyJolly.jpg to folder we created
                        this.file.copyFile(this.file.applicationDirectory + "www/assets/", fileName, ROOT_DIRECTORY + folderName + '//', fileName)
                          .then((entries) => {

                          })
                          .catch((error) => {
                            alert.present();
                          });
                      })
                      .catch((error) => {
                        alert.present();
                      });
                  })
                  .catch((error) => {
                    alert.present();
                  })
              })
              .catch((error) => {
                alert.present();
              })
          });
        }
        if (k.startsWith('bld1v')) {
          this.storage.get(k).then(val => {
            let txt = val;
            let fileName = k + '.txt';
            let fileData = JSON.stringify(txt);
            const ROOT_DIRECTORY = 'file:///sdcard//';
            const folderName = 'water';
            console.log(txt);//JSON
            console.log(fileName);
            bld.push(txt);
            this.file.createFile(this.file.applicationDirectory + "www/assets/", fileName, true)
              .then((en) => {
                this.file.writeFile(this.file.applicationDirectory + "www/assets/", fileName, this.convertJsonToCsv(bld))
                  .then((en) => {
                    //Create a folder in memory location
                    this.file.createDir(ROOT_DIRECTORY, folderName, true)
                      .then((entries) => {
                        //Copy our asset/img/FreakyJolly.jpg to folder we created
                        this.file.copyFile(this.file.applicationDirectory + "www/assets/", fileName, ROOT_DIRECTORY + folderName + '//', fileName)
                          .then((entries) => {

                          })
                          .catch((error) => {
                            alert.present();
                          });
                      })
                      .catch((error) => {
                        alert.present();
                      });
                  })
                  .catch((error) => {
                    alert.present();
                  })
              })
              .catch((error) => {
                alert.present();
              })
          });
        }
      }

    });
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
