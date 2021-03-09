import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/notifications', title: 'Thông báo',  icon:'notifications', class: '' },
    { path: '/student', title: 'Học sinh',  icon:'school', class: '' },
    { path: '/parent', title: 'Phụ huynh',  icon:'person', class: '' },
    { path: '/teacher', title: 'Giáo viên',  icon:'content_paste', class: '' },
    { path: '/classes', title: 'Lớp học',  icon:'class', class: '' },
    { path: '/food-menu', title: 'Thực đơn',  icon:'fastfood', class: '' },
    { path: '/fee-payment', title: 'Học phí',  icon:'payments', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
