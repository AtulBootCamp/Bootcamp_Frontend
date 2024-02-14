import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() tabChange = new EventEmitter<string>();
  selectedTab: string = 'employee'; // Add this line

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.tabChange.emit(tab);
  }
}
