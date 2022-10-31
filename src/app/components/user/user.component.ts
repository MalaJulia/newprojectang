import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

@Output()
 userLift= new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {
  }
  lift():void{
  this.userLift.emit(this.user)
  }

}
