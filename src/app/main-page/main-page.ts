import { Component } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'JollieBee',
      image: 'img/banana.jpg',
      likes: 95,
      liked: true,
      comments: ['Krasse Bananen', 'So schön grün'],
    },
    {
      name: 'Mandy',
      image: 'img/orange.jpg',
      likes: 3,
      liked: false,
      comments: [],
    },
    {
      name: 'Nadine',
      image: 'img/currant.jpg',
      likes: 12,
      liked: true,
      comments: [],
    },
  ];

  toggleLike(post: Post): void {
    if (post.liked) {
      post.likes--;
    } else {
      post.likes++;
    }
    post.liked = !post.liked;
  }

  addComment(post: Post, input: HTMLInputElement): void {
    const text = input.value.trim();
    if (text === '') {
      return;
    }
    post.comments.push(text);
    input.value = '';
  }
}