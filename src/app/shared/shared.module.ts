import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// vx
import { KNZThemeModule } from '@knz/theme';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// #region third libs
import { NgZorroAntdModule } from 'ng-zorro-antd'; 

 

const THIRDMODULES = [NgZorroAntdModule];
// #endregion

// #region your componets & directives
const COMPONENTS = [];
const DIRECTIVES = [];
// #endregion


const PIPES = [
  
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    KNZThemeModule.forChild(),
    
    ...THIRDMODULES
    
  ],
  declarations: [ 
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    KNZThemeModule,
    TranslateModule, 
    ...THIRDMODULES, 
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
})
export class SharedModule {}
