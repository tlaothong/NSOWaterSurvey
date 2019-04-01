import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CommentInList } from '../../models/mobile/MobileModels';

/**
 * Generated class for the DlgCommentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dlg-comment-list',
  templateUrl: 'dlg-comment-list.html',
})
export class DlgCommentListPage {

  public commentList: CommentInList[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
        private viewCtrl: ViewController) {
    this.commentList = this.navParams.get("comments");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DlgCommentListPage');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

}
