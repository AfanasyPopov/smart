import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectSearchable } from 'ionic-select-searchable';

import { SearchPage } from './search';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPage),
    TranslateModule.forChild(),
    SelectSearchableModule
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule { }
