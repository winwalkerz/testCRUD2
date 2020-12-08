import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms'; //import module ของ angular ถึงจะทำ two way binding ได้
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [DrawerComponent],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzInputModule,
    NzFormModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzModalModule,
  ],
})
export class DrawerModule {}
