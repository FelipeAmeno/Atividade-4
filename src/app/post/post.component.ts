import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {

  Post: Post;
  PostArray: Post[];
  RespAsync: any;


  constructor(private post: PostService) { }

  async ngOnInit() {
    this.RespAsync = await this.post.Get();
    this.PostArray = this.RespAsync;
  }

  onSubmit() {

  }

}
