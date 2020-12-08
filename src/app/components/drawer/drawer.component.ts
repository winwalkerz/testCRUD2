import { DrawerEditComponent } from './../drawer-edit/drawer-edit.component';
import { TodoService } from './../../todo.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer'; //import service ของ ant
import { NzModalCloseComponent } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI
  valueCreate = {
    id: '',
    Task: '',
    Time: '',
  };

  constructor(
    private todoservice: TodoService,
    private nzDrawerService: NzDrawerService
  ) {}

  ngOnInit(): void {}

  create(data: any) {
    this.todoservice.create(data).then(() => {
      alert('Success'),
        (this.valueCreate.Task = ''),
        (this.valueCreate.Time = ''),
        this.close();
    });
  }

  close() {

  }

  showData() {
    this.todoservice.refresh().then((res: any) => {
      this.data = res;
      console.warn(this.data);
    });
  }
}
