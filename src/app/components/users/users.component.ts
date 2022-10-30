import { Component, OnInit } from '@angular/core';
import {urls} from "../../config";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../interfaces";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService:UserService) {

  }


  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)

  }
}
