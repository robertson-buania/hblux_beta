import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/modele/article.modele';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';

@Component({
  selector: 'app-hblux-header',
  templateUrl: './hblux-header.component.html',
  styleUrls: ['./hblux-header.component.css']
})
export class HbluxHeaderComponent implements OnInit {

  constructor(private articleService:HbluxArticleService) { }

  ngOnInit(): void {

  }

}
