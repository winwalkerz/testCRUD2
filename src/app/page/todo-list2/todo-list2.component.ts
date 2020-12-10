import { TodoService } from './../../todo.service'; //import service ส่วนกลาง
import { Component, OnInit, ViewChild } from '@angular/core';
import { DrawerComponent } from '../../components/drawer/drawer.component'; //import component ที่ต้องการดึงมาใช้งาน
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant
import { DrawerEditComponent } from './../../components/drawer-edit/drawer-edit.component';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css'],
})
export class TodoList2Component implements OnInit {
  data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI
  dataTest = {
    id: '',
    Task: '',
    Time: '',
  };
  constructor(
    private todoService: TodoService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private nzDrawerService: NzDrawerService //ประกาศตัวแปลเพื่อมาใช้งาน
  ) {}

  ngOnInit(): void {
    this.showData();
    // console.log();
  }

  onClick() {
    //show drawer create
    const drawerRef = this.nzDrawerService.create<DrawerComponent>({
      // { data: any },
      // any
      nzTitle: 'Component',
      nzContent: DrawerComponent,
      // nzContentParams: {
      //   data: this.data,
      // },
    });

    drawerRef.afterClose.subscribe(() => {
      this.showData();
    });
  }
  reData(value: any) {
    this.dataTest = { ...value };
    console.log(this.dataTest);
    this.onClickEdit();
  }
  onClickEdit() {
    const drawerRef = this.nzDrawerService.create<
      DrawerEditComponent,
      { dataSend: any },
      any
    >({
      nzTitle: 'Edit Data eiei',
      nzContent: DrawerEditComponent,
      nzContentParams: {
        dataSend: this.dataTest,
      },
    });
    drawerRef.afterClose.subscribe(() => {
      this.showData();
    });
  }
  clickDelete(id: any) {
    this.todoService.delete(id).then(() => {
      this.showData();
    });
  }

  showData() {
    this.todoService.refresh().then((res: any) => {
      this.data = res;
      // console.warn(this.data);
    });
  }
}
