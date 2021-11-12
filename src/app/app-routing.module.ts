import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HbluxAccueilComponent } from './components/hblux-accueil/hblux-accueil.component';
import { HbluxAproposComponent } from './components/hblux-apropos/hblux-apropos.component';
import { HbluxCheckoutComponent } from './components/hblux-checkout/hblux-checkout.component';
import { HbluxContactComponent } from './components/hblux-contact/hblux-contact.component';
import { HbluxEditArticleComponent } from './components/hblux-edit-article/hblux-edit-article.component';
import { HbluxNouvelArticleComponent } from './components/hblux-nouvel-article/hblux-nouvel-article.component';
import { HbluxboutiqueComponent } from './components/hbluxboutique/hbluxboutique.component';

const routes: Routes = [

  {path:"hblux",component:HbluxAccueilComponent},
  {path:"checkout",component:HbluxCheckoutComponent},
  {path:"hbluxboutique",component:HbluxboutiqueComponent},
  {path:"hbluxapropos",component:HbluxAproposComponent},
  {path:"hbluxcontact",component:HbluxContactComponent},
  {path:"hbluxnouvel",component:HbluxNouvelArticleComponent},
  {path:"hbluxedit/:id",component:HbluxEditArticleComponent},
  {path:"**",component:HbluxAccueilComponent},
  // {path:"hbluxboutique",component:HbluxboutiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
