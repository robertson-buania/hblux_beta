import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HbluxAproposComponent } from './components/hblux-apropos/hblux-apropos.component';
import { HbluxContactComponent } from './components/hblux-contact/hblux-contact.component';
import { HbluxboutiqueComponent } from './components/hbluxboutique/hbluxboutique.component';

const routes: Routes = [
  {path:"hbluxboutique",component:HbluxboutiqueComponent},
  {path:"hbluxapropos",component:HbluxAproposComponent},
  {path:"hbluxcontact",component:HbluxContactComponent},
  // {path:"hbluxboutique",component:HbluxboutiqueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
