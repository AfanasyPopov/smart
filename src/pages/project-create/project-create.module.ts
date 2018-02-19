import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectCreatePage } from './project-create';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProjectCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectCreatePage),
    TranslateModule.forChild()
  ],
})
export class ProjectCreatePageModule {}
