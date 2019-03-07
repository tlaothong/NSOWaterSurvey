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

  updateListUnit(id: string, data: any) { //id building, unit form
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
    this.updateStatusBuilding(id,data)
  }

  updateStatusBuilding(idBuilding: string, dataHousehold: any) {
    this.storage.get(idBuilding).then((val) => {
      let building = val
      this.storage.get(dataHousehold._id).then((val)=>{
        let find = val
        if (find.Status != dataHousehold.Status && (find.Status == "complete" || dataHousehold.Status == "complete"))
        {
          building.UnitCountComplete += (dataHousehold.Status == "complete") ? 1 : -1;
          if (building.UnitCountComplete == building.UnitCount)
          {
            building.Status = "done-all";
          }
          this.storage.set(idBuilding, building)
          this.storage.get(building.ea).then((val)=>{
            let BDlist = val
            let index = BDlist.findIndex(it => it._id == building._id)
            BDlist.splice(index,1);
            BDlist.push(building)
            this.storage.set(building.ea,BDlist)
          })
        }
      })
    })
  }

}
