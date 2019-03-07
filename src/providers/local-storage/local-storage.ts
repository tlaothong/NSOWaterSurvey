import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetHouseHoldSuccess } from '../../states/household/household.actions';

/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {

  constructor(public http: HttpClient, private storage: Storage, private store: Store<HouseHoldState>) {
    console.log('Hello LocalStorageProvider Provider');
  }

  updateListUnit(id: string, data: any) {
    let key = "BL" + id
    console.log(key);
    this.store.dispatch(new SetHouseHoldSuccess(data));
    this.storage.get(key).then((val) => {
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
        this.storage.set(key, list)

      }
    })
  }

}
