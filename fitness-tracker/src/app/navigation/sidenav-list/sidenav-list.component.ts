import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css'
})
export class SidenavListComponent {
  @Output() sideNav = new EventEmitter<void>();

  constructor() { }

  sideNavClose() {
    this.sideNav.emit();
  }
}
