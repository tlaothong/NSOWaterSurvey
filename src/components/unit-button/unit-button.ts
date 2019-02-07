import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ModalController, NavController, AlertController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { BuildingState } from '../../states/building/building.reducer';
import { HouseHoldState } from '../../states/household/household.reducer';
import { getHouseHoldSample, getUnitByIdBuilding, getDataOfUnit, getBack } from '../../states/household';
import { SwithStateProvider } from '../../providers/swith-state/swith-state';
import { LoadDataOfUnit } from '../../states/household/household.actions';
import { WaterSources9Component } from '../water-sources9/water-sources9';
import { TableCheckItemCountComponent } from '../table-check-item-count/table-check-item-count';
import { FishFarmingComponent } from '../fish-farming/fish-farming';
import { FrogFarmingComponent } from '../frog-farming/frog-farming';
import { CrocodileFarmingComponent } from '../crocodile-farming/crocodile-farming';
import { WaterProblem6Component } from '../water-problem6/water-problem6';
import { WaterActivity5Component } from '../water-activity5/water-activity5';
import { WaterActivity6Component } from '../water-activity6/water-activity6';
import { WaterProblem4Component } from '../water-problem4/water-problem4';

/**
 * Generated class for the UnitButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'unit-button',
  templateUrl: 'unit-button.html'
})
export class UnitButtonComponent {

  @Input() forwardFormData$: any;
  @Input("headline") public text: string;
  @Input('no') public unitNo: string;
  @Input() public FormItem: FormGroup;

  private submitRequested: boolean;

  public access: number;
  public comment = '';
  public allComment = '';

  public index: number;
  public class = "play";
  public roomNumber = '';

  public fgac: FormArray;
  public fgcm: FormArray;

  private GetUnitByIdBuilding$ = this.store.select(getUnitByIdBuilding);

  constructor(private modalCtrl: ModalController, public navParams: NavParams, public navCtrl: NavController, public alertCtrl: AlertController, private store: Store<HouseHoldState>, private storeBuild: Store<BuildingState>, private fb: FormBuilder) {
    console.log('Hello UnitButtonComponent Component');
    this.text = '';
    this.FormItem = UnitButtonComponent.CreateFormGroup(this.fb);
  }

  ngOnInit() {
    this.GetUnitByIdBuilding$.subscribe(data => {
      if (data[Number(this.unitNo) - 1] != undefined) {

        let count = data[Number(this.unitNo) - 1].subUnit.accessCount;
        this.FormItem.get('subUnit.accessCount').setValue(count);
        this.setupAccessCountChanges();
        this.setupAccessCountChangesForComments();
        console.log(data[Number(this.unitNo) - 1]);
        console.log(this.FormItem.value);
        this.FormItem.setValue(data[Number(this.unitNo) - 1]);
        this.setAccess();
      }
    });
    this.setupAccessCountChanges();
    this.setupAccessCountChangesForComments();
    if (this.FormItem.get('subUnit.accessCount').value > 0) {
      this.setAccess();
    }

    // this.num = this.navParams.get('num');
    // if (this.num == 1) {
    //   this.navCtrl.push('WaterActivityUnitPage', { FormItem: this.FormItem });
    // }

  }

  public static CreateFormGroup(fb: FormBuilder): FormGroup {
    return fb.group({
      '_id': [null, Validators.required],
      'ea': [null, Validators.required],
      'buildingId': [null, Validators.required],
      'subUnit': fb.group({
        'roomNumber': [null, Validators.required],
        'accessCount': [0, Validators.required],
        'accesses': fb.array([0]),
        'hasPlumbing': [false, Validators.required],
        'hasPlumbingMeter': [false, Validators.required],
        'isPlumbingMeterXWA': [false, Validators.required],
        'hasGroundWater': [false, Validators.required],
        'hasGroundWaterMeter': [false, Validators.required],
      }),
      'isHouseHold': [null, Validators.required],
      'isAgriculture': [null, Validators.required],
      'isFactorial': [null, Validators.required],
      'isCommercial': [null, Validators.required],
      'comments': fb.array([]),
      'residence': fb.group({
        'memberCount': [null],
        'workingAge': [null],
        'waterSources': fb.group({
          'plumbing': [null],
          'underGround': [null],
          'pool': [null],
          'river': [null],
          'irrigation': [null],
          'rain': [null],
          'rainingAsIs': [null],
          'buying': [null],
          'hasOther': [null],
          'other': [null],
        }),
        'gardeningUse': [null]
      }),
      'agriculture': fb.group({
        'ricePlant': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'agronomyPlant': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'rubberTree': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'perennialPlant': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'herbsPlant': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'flowerCrop': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'mushroomPlant': fb.group({
          'doing': [null],
          'fieldCount': [0],
          'fields': fb.array([]),
        }),
        'animalFarm': fb.group({
          'doing': [null],
          'cow': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'buffalo': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'pig': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'goat': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'sheep': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'chicken': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'duck': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'goose': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'silkWool': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'other': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'waterSources': fb.group({
            'plumbing': [null],
            'underGround': [null],
            'pool': [null],
            'river': [null],
            'irrigation': [null],
            'rain': [null],
            'rainingAsIs': [null],
            'buying': [null],
            'hasOther': [null],
            'other': [null],
          }),
        }),
        'aquaticAnimals': fb.group({
          'doing': [null],
          'isFish': [null],
          'fish': fb.group({
            'doing': [null],
            'depression': [null],
            'gardenGroove': [null],
            'stew': [null],
            'riceField': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isShrimp': [null],
          'shrimp': fb.group({
            'doing': [null],
            'depression': [null],
            'gardenGroove': [null],
            'stew': [null],
            'riceField': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isFrog': [null],
          'frog': fb.group({
            'doing': [null],
            'depression': [null],
            'stew': [null],
            'other': [null],
            'hasOther': [null],
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isCrocodile': [null],
          'crocodile': fb.group({
            'doing': [null],
            'depression': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isSnappingTurtle': [null],
          'snappingTurtle': fb.group({
            'doing': [null],
            'depression': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isCrab': [null],
          'crab': fb.group({
            'doing': [null],
            'depression': [null],
            'gardenGroove': [null],
            'stew': [null],
            'riceField': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isShellFish': [null],
          'shellFish': fb.group({
            'doing': [null],
            'depression': [null],
            'gardenGroove': [null],
            'stew': [null],
            'riceField': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isTurtle': [null],
          'turtle': fb.group({
            'doing': [null],
            'depression': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
          'isReddish': [null],
          'reddish': fb.group({
            'doing': [null],
            'depression': [null],
            'gardenGroove': [null],
            'stew': [null],
            'riceField': [null],
            'hasOther': [null],
            'other': [null],
            'fieldCount': [0],
            'fieldsAreSameSize': [null],
            'fields': fb.array([]),
            'animalsCount': [null],
            'waterSources': fb.group({
              'plumbing': [null],
              'underGround': [null],
              'pool': [null],
              'river': [null],
              'irrigation': [null],
              'rain': [null],
              'rainingAsIs': [null],
              'buying': [null],
              'hasOther': [null],
              'other': [null],
            }),
          }),
        })
      }),
      'factory': fb.group({
        'name': [null],
        'category': [null],
        'workersCount': [null],
        'heavyMachine': [null],
        'waterSources': fb.group({
          'plumbing': [null],
          'underGround': [null],
          'pool': [null],
          'river': [null],
          'irrigation': [null],
          'rain': [null],
          'rainingAsIs': [null],
          'buying': [null],
          'hasOther': [null],
          'other': [null],
        }),
        'hasWasteWaterFromProduction': [null],
        'hasWasteWaterTreatment': [null],
        'wasteWaterReuse': [null]
      }),
      'commerce': fb.group({
        'name': [null],
        'serviceType': [null],
        'buildingCode': [0],
        'questionForAcademy': fb.group({
          'preSchool': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'kindergarten': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'primarySchool': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'highSchool': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'vocational': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'higherEducation': fb.group({
            'hasItem': [null],
            'itemCount': [null]
          }),
          'personnelCount': [null]
        }),
        'hotelsAndResorts': fb.group({
          'roomCount': [null],
          'personnelCount': [null]
        }),
        'hospital': fb.group({
          'bedCount': [null],
          'personnelCount': [null]
        }),
        'building': fb.group({
          'roomCount': [null],
          'occupiedRoomCount': [null],
          'personnelCount': [null]
        }),
        'religious': fb.group({
          'peopleCount': [null]
        }),
        'otherBuilding': fb.group({
          'personnelCount': [null]
        }),
        'waterSources': fb.group({
          'plumbing': [null],
          'underGround': [null],
          'pool': [null],
          'river': [null],
          'irrigation': [null],
          'rain': [null],
          'rainingAsIs': [null],
          'buying': [null],
          'hasOther': [null],
          'other': [null],
        }),
      }),
      'waterUsage': fb.group({
        "plumbing": fb.group({
          'mwa': fb.group({
            'doing': [null],
            'qualityProblem': fb.group({
              'hasProblem': [null],
              'problem': fb.group({
                'turbidWater': [false],
                'saltWater': [false],
                'smell': [false],
                'filmOfOil': [false],
                'fogWater': [false],
                'hardWater': [false],
              })
            }),
            'plumbingUsage': fb.group({
              'waterQuantity': [0],
              'cubicMeterPerMonth': [null],
              'waterBill': [null]
            })
          }),
          'pwa': fb.group({
            'doing': [null],
            'qualityProblem': fb.group({
              'hasProblem': [null],
              'problem': fb.group({
                'turbidWater': [false],
                'saltWater': [false],
                'smell': [false],
                'filmOfOil': [false],
                'fogWater': [false],
                'hardWater': [false],
              })
            }),
            'plumbingUsage': fb.group({
              'waterQuantity': [0],
              'cubicMeterPerMonth': [null],
              'waterBill': [null],
            })
          }),
          'other': fb.group({
            'doing': [null],
            'qualityProblem': fb.group({
              'hasProblem': [null],
              'problem': fb.group({
                'turbidWater': [false],
                'saltWater': [false],
                'smell': [false],
                'filmOfOil': [false],
                'fogWater': [false],
                'hardWater': [false],
              })
            }),
            'plumbingUsage': fb.group({
              'waterQuantity': [0],
              'cubicMeterPerMonth': [null],
              'waterBill': [null],
            })
          }),
          'waterActivityMWA': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
          'waterActivityPWA': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
          'waterActivityOther': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
          'hasWaterNotRunning': [null],
          'waterNotRunningCount': [null]
        }),
        'groundWater': fb.group({
          'privateGroundWater': fb.group({
            'doing': [null],
            'allCount': [0],
            'waterResourceCount': [0],
            'waterResources': fb.array([])
          }),
          'publicGroundWater': fb.group({
            'doing': [null],
            'waterResourceCount': [0],
            'waterResources': fb.array([])
          })
        }),
        'river': fb.group({
          'hasPump': [null],
          'pumpCount': [0],
          'pumps': fb.array([]),
          'waterActivities': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
          'qualityProblem': fb.group({
            'hasProblem': [null],
            'problem': fb.group({
              'turbidWater': [false],
              'saltWater': [false],
              'smell': [false],
              'filmOfOil': [false],
              'fogWater': [false],
              'hardWater': [false],
            })
          })
        }),
        'pool': fb.group({
          'doing': [null],
          'waterResourceCount': [0],
          'waterResources': fb.array([]),
          'poolCount': [0],
          'hasSameSize': [null],
          'poolSizes': fb.array([]),
        }),
        'irrigation': fb.group({
          'hasCubicMeterPerMonth': [null],
          'cubicMeterPerMonth': [null],
          'hasPump': [null],
          'pumpCount': [0],
          'pumps': fb.array([]),
          'waterActivities': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
          'qualityProblem': fb.group({
            'hasProblem': [null],
            'problem': fb.group({
              'turbidWater': [false],
              'saltWater': [false],
              'smell': [false],
              'filmOfOil': [false],
              'fogWater': [false],
              'hardWater': [false],
            })
          })
        }),
        'rain': fb.group({
          'rainContainers': fb.array([]),
          'waterActivities': fb.group({
            'drink': [0],
            'plant': [0],
            'farm': [0],
            'agriculture': [0],
            'product': [0],
            'service': [0]
          }),
        }),
        'buying': fb.group({
          'package': fb.array([]),
        })
      }),
      'disaster': fb.group({
        'flooded': [null],
        'yearsDisasterous': fb.array([]),
        '_id': [null]
      }),
      'closing': fb.group({
        'informer': [null],
        'factorialCategoryCode': [0],
        'serviceTypeCode': [0]
      }),
      'recCtrl': fb.group({
        'createdDateTime': [Date],
        'lastModified': [Date],
        'deletedDateTime': [null],
        'lastUpload': [null],
        'lastDownload': [null],
        'logs': fb.array([])
      }),
      'population': fb.group({
        'personCount': [0],
        'persons': fb.array([])
      }),
    });
  }

  sendIdUnit() {
    this.store.dispatch(new LoadDataOfUnit(this.FormItem.get('_id').value));
  }

  public showModalSetting() {
    const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
    modal.onDidDismiss(data => {
      if (data) {
        var fg = <FormGroup>data;
        this.FormItem.setValue(fg.value);
        this.setAccess();
        let access = this.FormItem.get('subUnit.accesses') as FormArray;
        let lastIndex = access.length - 1;
        if (access.at(lastIndex).value == 1) {
          this.sendIdUnit();
          this.navCtrl.push('WaterActivityUnitPage')
        }
      }
    });
    modal.present();
  }

  public showModal() {
    if (this.access == 1) {
      this.sendIdUnit();
      this.navCtrl.push('WaterActivityUnitPage');
    }
    else if (this.class == "play" || this.class == "return" || this.class == "returnCm") {

      let count = this.FormItem.get('subUnit.accessCount').value + 1;
      this.FormItem.get('subUnit.accessCount').setValue(count);
      this.setupAccessCountChanges();
      this.setupAccessCountChangesForComments();

      const modal = this.modalCtrl.create("DlgUnitPage", { FormItem: this.FormItem });
      modal.onDidDismiss(data => {
        if (data) {
          var fg = <FormGroup>data;
          this.FormItem.setValue(fg.value);
          this.setAccess();
          let access = this.FormItem.get('subUnit.accesses') as FormArray;
          let lastIndex = access.length - 1;
          if (access.at(lastIndex).value == 1) {
            this.sendIdUnit();
            this.navCtrl.push('WaterActivityUnitPage')
          }
        }
        else {
          this.FormItem.get('subUnit.accessCount').setValue(count - 1);
          this.setupAccessCountChanges();
          this.setupAccessCountChangesForComments();
        }
      });
      modal.present();
    }
  }

  submitRequest() {
    this.submitRequested = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnitButtonComponent');
  }

  public isValid(name: string): boolean {
    var ctrl = this.FormItem.get(name);
    return ctrl.invalid && (ctrl.touched || this.submitRequested);
  }

  private setAccess() {
    this.fgac = this.FormItem.get('subUnit.accesses') as FormArray;
    this.fgcm = this.FormItem.get('comments') as FormArray;
    this.index = this.FormItem.get('subUnit.accessCount').value - 1;
    this.index = (this.index < 0) ? 0 : this.index;
    this.access = this.fgac.at(this.index).value;
    this.comment = this.fgcm.at(this.index).value.text;

    let text = '';
    for (let i = 0; i < this.index + 1; i++) {
      text += (this.fgcm.at(i).value.text != '') ? 'ครั้งที่ ' + (i + 1) + ' : ' + this.fgcm.at(i).value.text + '<br>' : '';
    }
    this.allComment = text;

    this.roomNumber = this.FormItem.get('subUnit.roomNumber').value;
    this.checkAccess();
  }

  private checkAccess() {
    switch (this.access) {
      case 1:
        if (this.FormItem.valid) {
          this.class = (this.allComment == '') ? "complete" : "completeCm";
        }
        else {
          this.class = (this.allComment == '') ? "pause" : "pauseCm";
        }
        break;
      case 2:
      case 3:
        if (this.index < 2) {
          this.class = (this.allComment == '') ? "return" : "returnCm";
        }
        else {
          this.class = (this.allComment == '') ? "complete" : "completeCm";
        }
        break;
      case 4:
        this.class = (this.allComment == '') ? "empty" : "emptyCm";
        break;
      case 5:
        this.class = (this.allComment == '') ? "abandoned" : "abandonedCm";
        break;
      default:
        break;
    }
  }

  showComment() {
    const alert = this.alertCtrl.create({
      title: 'ปัญหา/อุปสรรค',
      subTitle: this.allComment,
      buttons: ['OK']
    });
    alert.present();
  }

  public static CreateComment(fb: FormBuilder): FormGroup {
    return fb.group({
      'at': [null],
      'text': [''],
    });
  }

  private setupAccessCountChanges() {
    const componentFormArray: string = "subUnit.accesses";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var accesses = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.FormItem.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < accesses.length) {
          const fld = accesses[i];
          ctrl = fld;
        } else {
          ctrl = new FormControl();
        }

        farr.push(ctrl);
      }
      let fgrp = this.FormItem.get('subUnit') as FormGroup;
      fgrp.setControl('accesses', farr);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }

  private setupAccessCountChangesForComments() {
    const componentFormArray: string = "comments";
    const componentCount: string = "subUnit.accessCount";

    var onComponentCountChanges = () => {
      var comments = (this.FormItem.get(componentFormArray) as FormArray).controls || [];
      var accessCount = this.FormItem.get(componentCount).value || 0;
      var farr = this.fb.array([]);

      accessCount = Math.max(0, accessCount);

      for (let i = 0; i < accessCount; i++) {
        var ctrl = null;
        if (i < comments.length) {
          const fld = comments[i];
          ctrl = fld;
        } else {
          ctrl = UnitButtonComponent.CreateComment(this.fb);
        }

        farr.push(ctrl);
      }
      this.FormItem.setControl(componentFormArray, farr);
    };

    this.FormItem.get(componentCount).valueChanges.subscribe(it => onComponentCountChanges());

    onComponentCountChanges();
  }
}
