import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
  post: IPost

  @Output()
  postLift = new EventEmitter<IPost>()

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {}

  lift(): void {
  this.postLift.emit(this.post)
  }
  getDetails():void{
    this.router.navigate([this.post.id],
      {
        relativeTo: this.activatedRoute,
        state:{user:this.post}
      },
    )

  }

}
