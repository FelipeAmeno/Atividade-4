import { Component, OnInit, Input } from '@angular/core';
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
  @Input() postInput;
  receber: any;


  constructor(private Comment: commentService) { }

  async ngOnInit() {
    this.RespAsync = await this.Comment.Get();
    this.ComentarioArray = this.RespAsync;

    this.receber = await this.Comment.GetById(this.postInput);
    this.ComentarioArray = this.receber;
  }

}
