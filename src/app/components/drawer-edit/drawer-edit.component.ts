import { TodoService } from './../../todo.service';
import { Data } from '@angular/router';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant

@Component({
  selector: 'app-drawer-edit',
  templateUrl: './drawer-edit.component.html',
  styleUrls: ['./drawer-edit.component.css'],
})
export class DrawerEditComponent implements OnInit {
  @Input() dataSend: any;
  valueEdit = {
    id: '',
    Task: '',
    Time: '',
  };

  constructor(
    private todoservice: TodoService,
    private nzDrawerRef: NzDrawerRef
  ) {}

  ngOnInit(): void {}

  edit(data: any, id: any) {
    this.todoservice.edit(this.dataSend, this.dataSend.id).then(() => {
      this.nzDrawerRef.close();
      (this.dataSend.Task = ''), (this.dataSend.Time = '');
    });
  }
}
