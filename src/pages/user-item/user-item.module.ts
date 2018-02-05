import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserItemPage } from './user-item';

@NgModule({
  declarations: [
    UserItemPage,
  ],
  imports: [
    IonicPageModule.forChild(UserItemPage),
  ],
})
export class UserItemPageModule {}
