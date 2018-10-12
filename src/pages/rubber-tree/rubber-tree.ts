import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
/**
 * Generated class for the RubberTreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rubber-tree',
  templateUrl: 'rubber-tree.html',
})
export class RubberTreePage {

  private submitRequested: boolean;
  rubbertree: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.rubbertree = this.fb.group({
      
        "doing": ['',Validators.required],
        "fieldCount":['',Validators.required],
        "fields": this.fb.group({
          "location": this.fb.group({
            "province": ['',Validators.required],
            "distric": ['',Validators.required],
            "subDistric": ['',Validators.required]
          }),
          "area": this.fb.group({
            "rai": ['',Validators.required],
            "ngan": ['',Validators.required],
            "sqWa": ['',Validators.required]
          }),
          "irrigationField": ['',Validators.required],
          "waterSources": this.fb.group({
            "plumbing": ['',Validators.required],
            "underGround": ['',Validators.required],
            "pool": ['',Validators.required],
            "river": ['',Validators.required],
            "irrigation": ['',Validators.required],
            "rain": ['',Validators.required],
            "buying": ['',Validators.required],
            "rainingAsIs": ['',Validators.required],
            "other": ['',Validators.required]
          })
        })

      


    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RubberTreePage');
  }

  ionViewDidEnter() {

  }

  public handleSubmit() {
    this.submitRequested = true;

  }

  public isValid(name: string): boolean {
    var ctrl = this.rubbertree.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }
}
