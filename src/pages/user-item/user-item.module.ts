import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

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
  ],
  providers:[Clipboard]
})
export class UserItemPageModule {}
