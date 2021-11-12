import { Component, OnInit, Output } from '@angular/core';
import { Article } from './modele/article.modele';
import { HbluxArticleService } from './services/hblux-article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hb Lux';

}
