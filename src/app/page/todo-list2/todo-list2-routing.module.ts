import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoList2Component } from './todo-list2.component';

const routes: Routes = [{ path: '', component: TodoList2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoList2RoutingModule { }
