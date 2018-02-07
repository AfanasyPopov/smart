import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { UserItemPage } from './user-item';

@NgModule({
  declarations: [
    UserItemPage,
  ],
  imports: [
    IonicPageModule.forChild(UserItemPage),
    TranslateModule.forChild()

  ],
  exports:[
    UserItemPage
  ]
})
export class UserItemPageModule {}
