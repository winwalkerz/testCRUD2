import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drawer-edit',
  templateUrl: './drawer-edit.component.html',
  styleUrls: ['./drawer-edit.component.css'],
})
export class DrawerEditComponent implements OnInit {
  @Input() valueEdit = {
    id: '',
    Task: '',
    Time: '',
  };

  constructor() {}

  ngOnInit(): void {}

  edit() {}
}
