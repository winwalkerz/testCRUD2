import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerEditComponent } from './drawer-edit.component';
import { FormsModule } from '@angular/forms'; //import module ของ angular ถึงจะทำ two way binding ได้
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [DrawerEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzModalModule,
    NzInputModule
  ]
})
export class DrawerEditModule { }
