import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello LocalStorageProvider Provider');
  }

  updateListUnit(id: string, data: any) {
    this.storage.get('s' + id).then((val) => {
      let list = val
      console.log(list);
      if (list != null) {
        let fin = list.find(it => it._id == data._id)
        console.log(fin);

        let index = list.findIndex(d => d._id == data._id)
        console.log(index);

        if (fin == null) {
          list.push(data);
        } else {
          list.splice(index, 1);
          list.push(data)
        }
        this.storage.set(id, list)
      }
    })
  }

}
