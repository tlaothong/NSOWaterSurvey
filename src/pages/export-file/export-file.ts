import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file/ngx';
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

  async exportJSON() {
    let alert = this.alert.create({
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

    const ROOT_DIRECTORY = this.file.externalRootDirectory;
    // 'file:///sdcard//';
    const folderName = 'water';
    let dirEntry = this.file.createDir(ROOT_DIRECTORY, folderName, true);

    let keys = await this.storage.keys();

    for (const k of keys) {
      if (k.startsWith('ulogin1v')) {
        continue; // ignore login file
      }
      console.log('k', k);

      try {
        let fileName = k + '.txt';
        let fileEntry = await this.file.createFile(dirEntry, fileName, true);
        let writer = fileEntry.createWriter();

        let txt = await this.storage.get(k);
        let fileData = JSON.stringify(txt);
        let dataObj = new Blob([fileData], { type: 'text/plain' });
        await writer.write(dataObj);
      } catch(exception) {
        alert(exception);
      }
    }
    load.dismiss();
  }

  exportCSV() {
    let load = this.load.create({
      content: 'กำลังสำรองข้อมูลไปยังหน่วยความจำภายนอก',
      enableBackdropDismiss: false,
    });
    let success = this.alert.create({
      title: 'สำรองข้อมูลไปยังหน่วยความจำภายนอกเรียบร้อยแล้ว',
      buttons: ['ตกลง'],
    });
    this.storage.keys().then(val => {
      let keys = val;
      console.log(keys);

      for (let k of keys) {
        if (k.startsWith('bldlst1v')) {
          this.storage.get(k).then(val => {
            let txt = val;
            let fileDataBld = this.convertJsonToCsv(txt);
            console.log(fileDataBld);
            this.creatCSV('BuildingList', fileDataBld);
           
          });
        }
        if (k.startsWith('unt4b1v')) {
          this.storage.get(k).then(val => {
            let txt = val;
            let fileDataUnt = this.convertJsonToCsv(txt);
            console.log(fileDataUnt);
            this.creatCSV('HouseholdList', fileDataUnt);
            
          });
        }
      }
      load.dismiss();
      success.present();
    });
    load.present();
  }

  creatCSV(name: string, fileData) {
    let alert = this.alert.create({
      title: 'ไม่พบหน่วยความจำภายนอก',
      buttons: ['ตกลง'],
    });

    let fileName = name + '.csv';
    const ROOT_DIRECTORY = this.file.externalRootDirectory;
    // 'file:///sdcard//';
    const folderName = 'water'
    this.file.createDir(ROOT_DIRECTORY, folderName, true)
      .then((entries) => {
        this.file.createFile(ROOT_DIRECTORY + folderName + '/', fileName, true)
          .then((en) => {
            this.file.writeFile(ROOT_DIRECTORY + folderName + '/', fileName, fileData)
              .then((en) => {

              })
              .catch((error) => {
                alert.present();
              })
          })
          .catch((error) => {
            alert.present();
          })
      })
      .catch((error) => {
        alert.present();
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
