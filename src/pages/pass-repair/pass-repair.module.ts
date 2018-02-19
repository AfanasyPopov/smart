import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { PassRepairPage } from './pass-repair';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PassRepairPage,
  ],
  imports: [
    IonicPageModule.forChild(PassRepairPage),
    TranslateModule.forChild()
  ],
  exports: [
    PassRepairPage
  ]

})
export class PassRepairPageModule {}
