import { DrawerEditModule } from './../../components/drawer-edit/drawer-edit.module'; //******import module */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoList2RoutingModule } from './todo-list2-routing.module';
import { TodoList2Component } from './todo-list2.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';  //import component
import { DrawerModule } from 'src/app/components/drawer/drawer.module'; //******import module */
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [TodoList2Component,],
  imports: [
    CommonModule,
    TodoList2RoutingModule,
    NzTableModule,
    NzDividerModule,
    FormsModule,
    NzGridModule,
    NzTypographyModule,
    NzDrawerModule,
    DrawerModule,
    NzButtonModule,
    DrawerEditModule,
    NzIconModule,
    NzPaginationModule,
    NzToolTipModule
  ]
})
export class TodoList2Module { }
