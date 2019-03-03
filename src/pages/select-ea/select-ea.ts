import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, ViewChildren } from '@angular/core';
import { LoggingState } from '../../states/logging/logging.reducer';
import { LoadDataWorkEAByUserId, LoadCountOfWorks, StoreWorkEAOneRecord } from '../../states/logging/logging.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getDataWorkEA, getUserData } from '../../states/logging';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EaComponent } from '../../components/ea/ea';

@IonicPage()
@Component({
  selector: 'page-select-ea',
  templateUrl: 'select-ea.html',
})

export class SelectEaPage {
  f: FormGroup;
  @ViewChildren(EaComponent) private ea: EaComponent[];
  private formDataUser$ = this.store.select(getUserData).pipe(map(s => s));
  private formDataEa$ = this.store.select(getDataWorkEA).pipe(map(s => s));
  public dataEa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private store: Store<LoggingState>) {
    // this.f = fb.group({
    //   'EaCount': [null],
    //   'Ea': this.fb.array([]),
    // });
  }

  ionViewDidEnter() {
    this.formDataEa$.subscribe(data => {
      if (data != null) {
        this.dataEa = data
        for (let index = 0; index < this.dataEa.length; index++) {
          this.dataEa[index].properties.ea_code_14 = this.dataEa[index].properties.ea_code_14.substring(11)

        }
        console.log(this.dataEa);
      }
    });

    var userObj: any = null;
    this.formDataUser$.subscribe(data => {
      if (data != null) {
        userObj = data
        this.store.dispatch(new LoadDataWorkEAByUserId(userObj));
        this.store.dispatch(new LoadCountOfWorks(userObj));
      }
    });

    // var str = this.dataEa._id
    // this.store.select(getDataWorkEA).pipe(map(s => s)).subscribe(data => this.worksEachUser = data);
  }

  goConfirmSeletEAPage(data: any) {
    this.store.dispatch(new StoreWorkEAOneRecord(data));
    this.navCtrl.setRoot("HomesPage");
  }


  // private setupEaCountChanges() {
  //   const componentFormArray: string = "Ea";
  //   const componentCount: string = "EaCount";

  //   var onComponentCountChanges = () => {
  //     var Ea = (this.f.get(componentFormArray) as FormArray).controls || [];
  //     var EaCount = this.f.get(componentCount).value || 0;
  //     var farr = this.fb.array([]);

  //     EaCount = Math.max(0, EaCount);

  //     for (let i = 0; i < EaCount; i++) {
  //       var ctrl = null;
  //       if (i < Ea.length) {
  //         const fld = Ea[i];
  //         ctrl = fld;
  //       } else {
  //         ctrl = EaComponent.CreateFormGroup(this.fb);
  //       }

  //       farr.push(ctrl);
  //     }
  //     this.f.setControl(componentFormArray, farr);
  //   };

  //   this.f.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

  //   onComponentCountChanges();
  // }
}
