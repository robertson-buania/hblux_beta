import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HbluxComponent } from './components/hblux/hblux.component';
import { HbluxboutiqueComponent } from './components/hbluxboutique/hbluxboutique.component';
import { HbluxHeaderComponent } from './components/hblux-header/hblux-header.component';
import { HbluxFooterComponent } from './components/hblux-footer/hblux-footer.component';
import { HbluxContactComponent } from './components/hblux-contact/hblux-contact.component';
import { HbluxAproposComponent } from './components/hblux-apropos/hblux-apropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HbluxComponent,
    HbluxboutiqueComponent,
    HbluxHeaderComponent,
    HbluxFooterComponent,
    HbluxContactComponent,
    HbluxAproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
