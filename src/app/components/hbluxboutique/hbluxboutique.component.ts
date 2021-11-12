import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/modele/article.modele';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';

@Component({
  selector: 'app-hbluxboutique',
  templateUrl: './hbluxboutique.component.html',
  styleUrls: ['./hbluxboutique.component.css']
})
export class HbluxboutiqueComponent implements OnInit {

  panier:Article[]=[]
  articles:Article[]=[]
  mixteArticles:Article[]=[]
  hommeArticles:Article[]=[]
  femmeArticles:Article[]=[]
  accessoireArticles:Article[]=[]
  constructor(private articleService:HbluxArticleService,private router:Router){}
  ngOnInit(): void {
    this.getAllArticles()
    this.articleService.articlesSubjects.subscribe(
      data=>{
        this.panier=data
      }
    )
  }

  editArticle(id:number){
    this.router.navigateByUrl("hbluxedit/"+id)

  }
  onAjouterAuPanier(article:Article){
    this.panier.push(article)

    this.articleService.emitArttcle(this.panier)
    const sommeApayer=this.panier.reduce((acc,e)=>(acc+(e.prix*e.quantite)),0)

    return {somme:sommeApayer,panier:this.panier}
  }

  getMixteArticle(){


  }
  getHommeArticle(){

  }

  getFemmeArticle(){

  }

  getGaminArticle(){

  }

  getAccessoireArticle(){

  }
  getAllArticles(){
    this.articleService.findAll()
    .subscribe(data=>{
      this.articles=data
    })
  }

}
