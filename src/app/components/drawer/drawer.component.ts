import { DrawerEditComponent } from './../drawer-edit/drawer-edit.component';
import { TodoService } from './../../todo.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  @Input() data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI
  valueCreate = {
    id: '',
    Task: '',
    Time: '',
  };
  // @Output() onSendValue = new EventEmitter<boolean>();
  // sendValue() {
  //   this.onSendValue.emit(true);
  // }
  constructor(
    private todoservice: TodoService,
    private nzDrawerRef: NzDrawerRef
  ) {}

  ngOnInit(): void {
    this.showDatas();
  }

  create(data: any) {
    this.todoservice.create(data).then(() => {
      // console.warn(this.data);
      this.nzDrawerRef.close();
    });
  }

  showDatas() {
    this.todoservice.refresh().then((res: any) => {
      this.data = res;
      console.warn(this.data);
    });
  }
}
