import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectItemPage } from './project-item';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProjectItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectItemPage),
    TranslateModule.forChild(),
  ],
})
export class ProjectItemPageModule {}
