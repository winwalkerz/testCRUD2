import { TodoService } from './../../todo.service'; //import service ส่วนกลาง
import { Component, OnInit } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component'; //import component ที่ต้องการดึงมาใช้งาน
import { NzDrawerService } from 'ng-zorro-antd/drawer'; //import service ของ ant
import { DrawerEditComponent } from './../../components/drawer-edit/drawer-edit.component';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css'],
})
export class TodoList2Component implements OnInit {
  data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI

  constructor(
    private todoService: TodoService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private nzDrawerService: NzDrawerService //ประกาศตัวแปลเพื่อมาใช้งาน
  ) {}

  ngOnInit(): void {
    this.showData();
  }

  onClick() {
    //show drawer create
    this.nzDrawerService.create({
      nzTitle: 'Edit',
      nzContent: DrawerComponent,
      nzWidth: '90%',
    });
    this.showData();
  }

  onClick2() {
    //show draw edit
    this.nzDrawerService.create({
      nzTitle: 'Edit',
      nzContent: DrawerEditComponent,
      nzWidth: '90%',
    });
  }
  showData() {
    this.todoService.refresh().then((res: any) => {
      this.data = res;
    });
  }
}
