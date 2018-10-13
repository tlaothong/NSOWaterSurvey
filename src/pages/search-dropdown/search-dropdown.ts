import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content, AlertController } from 'ionic-angular';
import { Tree, EX_TREERAI_LIST, EX_TREETON_LIST, EX_TREEVET_LIST, EX_TREEDOK_LIST } from '../../models/tree';

/**
 * Generated class for the SearchDropdownPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-dropdown',
  templateUrl: 'search-dropdown.html',
})
export class SearchDropdownPage {
  type: string;
  limit: number;
  // TREERAI_LIST: Tree[] = EX_TREERAI_LIST;
  // TREETON_LIST: Tree[] = EX_TREETON_LIST;
  // TREEVET_LIST: Tree[] = EX_TREEVET_LIST;
  // TREEDOK_LIST: Tree[] = EX_TREEDOK_LIST;
  treeDisplay = '';
  searchDisplay: Array<any>;
  searchTerm: string;
  listData: Array<any>;
  searchListData: Array<any>;
  @ViewChild(Content) content: Content;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.limit = navParams.get('limit');
    this.treeDisplay = navParams.get('title');
    // this.type = "TREERAI";
    this.listData = navParams.get('selected');
    this.searchListData = navParams.get('list');
    // if (this.type == 'TREERAI') {
    //   this.treeDisplay = 'พืชไร่';
    // }
    // else if (this.type == 'TREETON') {
    //   this.treeDisplay = 'พืชต้น';
    // }
    // else if (this.type == 'TREEVET') {
    //   this.treeDisplay = 'พืชผัก สมุนไพร';
    // }
    // else if (this.type == 'TREEDOK') {
    //   this.treeDisplay = 'ไม้ดอก ไม้ประดับ การเพาะพันธุ์ไม้';
    // }
    // else if (this.type == "TREEDOK2") {
    //   this.treeDisplay = "พืชที่ปลูกหลัก"
    //   this.searchListData = []
    //   this.searchListData = navParams.get('list');
    //   //console.log(this.listData);
    // }
    // else if (this.type == "TREEVET2") {
    //   this.treeDisplay = "พืชที่ปลูกหลัก"
    //   this.searchListData = []
    //   //console.log(this.searchListData);
    // }

    this.searchTerm = "";
    this.setFilteredItems();
  }


  scrollToTop() {
    this.content.scrollToTop();
  }

  close() {
    this.viewCtrl.dismiss(this.listData);
  }
  select(id, name) {
    if (this.listData.filter(data => data == (id + '.' + name)).length < 1) {
      if (this.type != "TREEVET2" && this.type != "TREEDOK2") {
        if (this.listData.length < this.limit)
          this.listData.push(id + '.' + name);
        else {
          const alert = this.alertCtrl.create({
            title: 'สามารถเลือกได้สูงสุด ' + this.limit + ' ชนิด',
            buttons: [{
              text: 'ตกลง',
            }]
          });
          alert.present();
        }
      } else {
        if (this.listData.length < 1) {
          this.listData = [];
          this.listData.push(id + '.' + name);
        }
        else {
          const alert = this.alertCtrl.create({
            title: 'สามารถเลือกได้สูงสุด 1 ชนิด',
            buttons: [{
              text: 'ตกลง',
              handler: () => {

              }
            }]
          });
          alert.present();
        }
      }
      this.scrollToTop();
    } else {
      const alert = this.alertCtrl.create({
        title: 'ไม่สามารถเลือกพืชชนิดซ้ำกันได้',
        buttons: [{
          text: 'ตกลง',
          handler: () => {

          }
        }]
      });
      alert.present();
    }
  }
  setFilteredItems() {
    this.searchDisplay = this.searchListData.filter((tree) => {
      let temp = '' + tree.id + tree.name;
      return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
    // if (this.type == 'TREERAI') {
    //   this.searchDisplay = this.TREERAI_LIST.filter((tree) => {
    //     let temp = '' + tree.id + tree.name;
    //     return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    //   });
    // }
    //   else if (this.type == 'TREETON') {
    //     this.searchDisplay = this.TREETON_LIST.filter((tree) => {
    //       let temp = '' + tree.id + tree.name;
    //       return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    //     });
    //   }
    //   else if (this.type == 'TREEVET') {
    //     this.searchDisplay = this.TREEVET_LIST.filter((tree) => {
    //       let temp = '' + tree.id + tree.name;
    //       return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    //     });
    //   }
    //   else if (this.type == 'TREEDOK') {
    //     this.searchDisplay = this.TREEDOK_LIST.filter((tree) => {
    //       let temp = '' + tree.id + tree.name;
    //       return temp.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    //     });
    //   }
    //   else if (this.type == 'TREEDOK2' || this.type == 'TREEVET2') {
    //   }
  }
  deselect(index) {
    this.listData.splice(index, 1)
  }
  range(min, max, step) {
    step = step || 1;
    let input = [];
    for (let i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  }




}
