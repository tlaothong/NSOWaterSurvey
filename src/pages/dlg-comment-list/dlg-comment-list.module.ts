import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DlgCommentListPage } from './dlg-comment-list';

@NgModule({
  declarations: [
    DlgCommentListPage,
  ],
  imports: [
    IonicPageModule.forChild(DlgCommentListPage),
  ],
})
export class DlgCommentListPageModule {}
