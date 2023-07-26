import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';
import { Post } from '../user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  constructor(
    private ar: ActivatedRoute,
    private restUtils: RestutilsService
  ) {}

  sub!: Subscription | undefined;
  sub2!: Subscription;
  userId: string = '';
  showAddPost: boolean = false;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  posts: Post[] = [];
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.sub = this.ar.params.subscribe((data: any) => {
      this.userId = data['id'];
      this.sub2 = this.restUtils
        .getData('http://localhost:8000/user/', this.userId)
        .subscribe((userPosts: any) => {
          this.posts = userPosts['posts'];
        });
    });
  }
  switchToAdd() {
    this.showAddPost = true;
    this.notify.emit(this.showAddPost);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
