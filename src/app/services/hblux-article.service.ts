import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../modele/article.modele';

@Injectable({
  providedIn: 'root'
})
export class HbluxArticleService {


  apiUrl = "http://localhost:5000/articles";
  articlesSubjects=new Subject<any>()
  constructor(private http: HttpClient) { }
  panier:Article[]|null=null

  emitArttcle(sompanier:any){
    this.articlesSubjects.next(this.panier);
  }

  panierRetourner(){
    this.emitArttcle(this.panier)
    return this.panier
  }

  addPanier(){

  }
  findById() {
    return this.http.get<Article[]>(this.apiUrl);
  }
  findAll() {
    return this.http.get<Article[]>(this.apiUrl);
  }

  delete(id:number) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  persist(article:Article) {
    return this.http.post<Article>(this.apiUrl, article);
  }

  disponible(id:number, disponible:boolean) {
    return this.http.patch(`${this.apiUrl}/${id}`, {disponible: !disponible})
  }

  update(article:Article) {
    return this.http.put(`${this.apiUrl}/${article.id}`, article)
  }
}
