import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/modele/article.modele';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';

@Component({
  selector: 'app-hblux-single-checkout',
  templateUrl: './hblux-single-checkout.component.html',
  styleUrls: ['./hblux-single-checkout.component.css']
})
export class HbluxSingleCheckoutComponent implements OnInit {

  panierSouscription:Subscription|null=null
  panier:Article[]|null=null
  constructor(private articleService:HbluxArticleService) { }

  ngOnInit(): void {
    this.articleService.articlesSubjects.subscribe(
      data=>{
        this.panier=data
      }
    )
  }





}
