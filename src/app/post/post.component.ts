import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';
import { User } from '../models/User'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {

  Post: Post = {} as Post;
  PostArray: Post[];
  RespAsync: any;
  RespUser: any;
  UserArray: User[];
  receber





  constructor(private service: PostService, private useServ: UserService) {

  }


  async ngOnInit() {
    this.RespAsync = await this.service.Get();
    this.PostArray = this.RespAsync;

    this.RespUser = await this.useServ.Get();
    this.UserArray = this.RespUser;

  }


  async onSubmit(form) {
    await this.service.Post(form.value);
  }

  exibirComentario(post) {

    this.PostArray.forEach(postagem => {
      if (postagem.id == post.id) {
        postagem.exibirComentario = true;
      }
    })

  }
}
