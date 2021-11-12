import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HbluxComponent } from './components/hblux/hblux.component';
import { HbluxboutiqueComponent } from './components/hbluxboutique/hbluxboutique.component';
import { HbluxHeaderComponent } from './components/hblux-header/hblux-header.component';
import { HbluxFooterComponent } from './components/hblux-footer/hblux-footer.component';
import { HbluxContactComponent } from './components/hblux-contact/hblux-contact.component';
import { HbluxAproposComponent } from './components/hblux-apropos/hblux-apropos.component';
import { HbluxAccueilComponent } from './components/hblux-accueil/hblux-accueil.component';
import { HbluxCheckoutComponent } from './components/hblux-checkout/hblux-checkout.component';
import { HbluxSingleCheckoutComponent } from './components/hblux-single-checkout/hblux-single-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HbluxNouvelArticleComponent } from './components/hblux-nouvel-article/hblux-nouvel-article.component';
import { HbluxEditArticleComponent } from './components/hblux-edit-article/hblux-edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HbluxComponent,
    HbluxboutiqueComponent,
    HbluxHeaderComponent,
    HbluxFooterComponent,
    HbluxContactComponent,
    HbluxAproposComponent,
    HbluxAccueilComponent,
    HbluxCheckoutComponent,
    HbluxSingleCheckoutComponent,
    HbluxNouvelArticleComponent,
    HbluxEditArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
