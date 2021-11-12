import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/modele/article.modele';
import { HbluxArticleService } from 'src/app/services/hblux-article.service';

@Component({
  selector: 'app-hblux-nouvel-article',
  templateUrl: './hblux-nouvel-article.component.html',
  styleUrls: ['./hblux-nouvel-article.component.css']
})
export class HbluxNouvelArticleComponent implements OnInit {

  reussi=""
  reactiveArticle:FormGroup=this.fb.group({})
  constructor(private fb:FormBuilder, private articleService:HbluxArticleService) { }
  article:Article={

    nom:"",
    prix:0.00,
    quantite:1,
    type:"mixte",
    disponible:true,
    description:"",
    photos:[]
  }

  ngOnInit(): void {
    this.onInitReactiveForm()
  }

  onInitReactiveForm(){
    this.reactiveArticle=this.fb.group({
      nom:[this.article.nom,[Validators.required]],
      prix:[this.article.prix,[Validators.required]],
      quantite:[this.article.quantite,[Validators.required]],
      disponible:[this.article.disponible,[Validators.required]],
      typeArticle:[this.article.type,[Validators.required]],
      description:[this.article.description,[Validators.required]],
      photo1:[this.article.photos[0] ,[Validators.required]],
      photo2:[this.article.photos[0],[Validators.required]],
      photo3:[this.article.photos[0],[Validators.required]],
      photo4:[this.article.photos[0],[Validators.required]],

    })
  }

  get photos(){
    return <AbstractControl>this.reactiveArticle.get('photos') as FormArray
  }
  addNewPhoto(){
    return this.fb.group({
      type:["",Validators.required]
     })
  }
  addNewPhotoToForm(){
    this.photos.push(this.addNewPhoto())

  }
  onEnregistrerArticle(){

    if(this.reactiveArticle.valid){
      this.article={
        nom:this.reactiveArticle.value.nom,
        prix:this.reactiveArticle.value.prix,
        quantite:this.reactiveArticle.value.quantite,
        type:this.reactiveArticle.value.type,
        disponible:this.reactiveArticle.value.disponible,
        description:this.reactiveArticle.value.description,
        photos:[this.reactiveArticle.value.photo1,this.reactiveArticle.value.photo2,this.reactiveArticle.value.photo3,this.reactiveArticle.value.photo5]

          }
          this.articleService.persist(this.article)
          .subscribe(data=>{
            this.reussi="L'enregistrement a été efféctué avec success"
          })
    }else this.reussi="Vérifier le formulaire est mal rempli"
  }

  onClickNewEquipement(){}
  removeTypeEquipemnt(article:any){}
  succes(){
    setTimeout(() => {
      this.reussi=""
    }, 2000);
  }


}
