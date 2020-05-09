import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment';
import { commentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comentario: Comment;
  ComentarioArray: Comment[];
  RespAsync: any;

  constructor(private Coment: commentService) { }

  async ngOnInit() {
    this.RespAsync = await this.Coment.Get();
    this.ComentarioArray = this.RespAsync;
  }

}
