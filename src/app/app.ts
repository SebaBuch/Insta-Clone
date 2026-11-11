import { Component } from '@angular/core';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
