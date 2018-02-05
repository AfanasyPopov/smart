import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminPage } from './admin';
import {FilterPipe} from '../../pipes/filter/filter'

@NgModule({
  declarations: [
    AdminPage,
    FilterPipe,
  ],
  imports: [
    IonicPageModule.forChild(AdminPage),
  ],
})
export class AdminPageModule {}
