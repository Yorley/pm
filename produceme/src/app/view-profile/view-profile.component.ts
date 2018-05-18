import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})


export class ViewProfileComponent implements OnInit {

  screenWidth: number;
  screenHeight: number;
  currentUser: User;
  users: User[] = [];
  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
}

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.onResize();
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }
  }
