import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Store } from '@ngrx/store';
import { HouseHoldState } from '../../states/household/household.reducer';
import { SetHouseHoldSuccess } from '../../states/household/household.actions';
import { Observable } from 'rxjs';
import { ObserveOnMessage } from 'rxjs/operators/observeOn';

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

  public saveBuilding(dataBuilding: any): Observable<any> {
    return Observable.fromPromise(this.storage.set(dataBuilding._id, dataBuilding))
      // .switchMap(_ => this.loadBuilding(dataBuilding._id))
      .mergeMap(_ => this.saveBuildingList(dataBuilding))
  }

  public loadBuilding(idBuilding: string): Observable<any> {
    return Observable.fromPromise(this.storage.get(idBuilding))
  }

  public saveBuildingList(dataBuilding: any): Observable<any> {
    let pipeline = this.loadBuildingList(dataBuilding).filter(it => it != null)
      .map((bldList: any[]) => {
        if (bldList.find(it => it._id == dataBuilding._id) != null) {
          let index = bldList.findIndex(it => it._id == dataBuilding._id);
          return bldList.splice(index, 1, dataBuilding)
        } else {
          let newBldList = [];
          newBldList.push(dataBuilding);
          return newBldList;
        }
      }).mergeMap(it => this.storage.set(dataBuilding.ea, it));
    return pipeline;
  }

  public loadBuildingList(dataBuilding: any): Observable<any> {
    return Observable.fromPromise(this.storage.get(dataBuilding.ea))
  }

  public saveHousehold(dataHousehold: any): Observable<any> {
    return Observable.fromPromise(this.storage.set(dataHousehold._id, dataHousehold)).switchMap(_ => this.loadHousehold(dataHousehold._id))
  }

  public loadHousehold(idHousehold: string): Observable<any> {
    return Observable.fromPromise(this.storage.get(idHousehold))
  }

  public saveHouseholdList(dataHousehold: any): Observable<any> {
    let pipeline = this.loadHouseholdList(dataHousehold).filter(it => it != null)
      .map((HHList: any[]) => {
        if (HHList.find(it => it._id == dataHousehold._id) != null) {
          let index = HHList.findIndex(it => it._id == dataHousehold._id);
          return HHList.splice(index, 1, dataHousehold)
        } else {
          let newBldList = [];
          newBldList.push(dataHousehold);
          return newBldList;
        }
      }).mergeMap(it => this.storage.set("BL" + dataHousehold.buildingId, it));
    return pipeline;
  }

  public loadHouseholdList(dataHousehold: any): Observable<any> {
    return Observable.fromPromise(this.storage.get("BL" + dataHousehold.buildingId))
  }

  public saveCommunity(){

  }

  public loadCommunity(){

  }

  public saveCommunityList(){

  }

  public loadCommunityList(){

  }

  public deleteBuilding(){

  }

  public deleteHousehold(){

  }

  public deleteCommunity(){
    
  }
  // public updateBuildingList(dataBuilding: any) {
  //   this.storage.get(dataBuilding.ea).then((val) => {
  //     let buildingList = val;
  //     if(buildingList != null){
  //       let fin = buildingList.find(it => it._id == dataBuilding._id);
  //       if(fin != null){
  //         let index = buildingList.findIndex(it => it._id == dataBuilding._id);
  //         buildingList.splice(index, 1, dataBuilding)
  //       }else{
  //         buildingList = [];
  //         buildingList.push(dataBuilding);
  //       }
  //     }
  //     return buildingList;
  //   })
  // }

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
          list.splice(index, 1, data);
          // list.push(data)
        }
        this.storage.set(key, list)

      }
    })
    this.updateStatusBuilding(id, data)
  }

  updateStatusBuilding(idBuilding: string, dataHousehold: any) {
    this.storage.get(idBuilding).then((val) => {
      if (val != null) {

        let building = val
        console.log(building);

        this.storage.get(dataHousehold._id).then((val) => {
          let find = val
          console.log(find);

          if (find.status != dataHousehold.status && (find.status == "complete" || dataHousehold.status == "complete")) {
            console.log("1111111");

            this.storage.get("BL" + idBuilding).then((val) => {
              let HHList = val;
              // building.unitCountComplete += (dataHousehold.status == "complete") ? 1 : -1;
              let complete = HHList.filter(it => it.status == "complete");
              building.unitCountComplete = complete.length;
              console.log(building.unitCountComplete);
              if (building.unitCountComplete == building.unitCount) {
                building.status = "done-all";
              }
            })
            building.lastUpdate = Date.now()
            this.storage.set(idBuilding, building)
            this.storage.get(building.ea).then((val) => {
              let BDlist = val
              let index = BDlist.findIndex(it => it._id == building._id)
              BDlist.splice(index, 1, building);
              // BDlist.push(building)
              this.storage.set(building.ea, BDlist)
            })
          }
          this.storage.set(dataHousehold._id, dataHousehold)
        })
        console.log(building.lastUpdate);

        building.lastUpdate = Date.now()
        console.log(building.ea);
        this.storage.set(idBuilding, building)
        this.storage.get(building.ea).then((val) => {
          let BDlist = val
          let index = BDlist.findIndex(it => it._id == building._id)
          BDlist.splice(index, 1, building);
          // BDlist.push(building)
          this.storage.set(building.ea, BDlist)
        })
      }
    })
  }

}
