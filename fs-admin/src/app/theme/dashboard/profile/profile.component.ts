import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.servivce';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [
    './profile.component.scss',
  ]
})
export class ProfileComponent implements OnInit {
  user: any;
  role: String;
  currentUserId: any;
  permissions: any;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.permissions = this.user.permissions;
    this.currentUserId = this.user._id;
    if (this.permissions) {
      this.role = 'admin'
    }
    else if (this.permissions) {
      this.role = 'subadmin'
    }
    else if (this.permissions) {
      this.role = 'supplier'
    }
    else {
      this.role = 'buyer'
    }
  }

}
