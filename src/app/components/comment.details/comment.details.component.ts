import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService, PostService} from "../../services";

@Component({
  selector: 'app-comment.details',
  templateUrl: './comment.details.component.html',
  styleUrls: ['./comment.details.component.css']
})
export class CommentDetailsComponent implements OnInit {
comment:IComment[]
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private postService: CommentService ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['post']
      if (!this.comment) {
        this.postService.getById(id).subscribe(value => this.comment = value)
      }
    })
  }

  ngOnInit(): void {
  }

}
