import { UTILITARIOSComponent } from './ANGULAR/utilitarios/utilitarios.component';
import { PCComponent } from './ANGULAR/pc/pc.component';
import { EMAISComponent } from './ANGULAR/emais/emais.component';
import { BodyComponent } from './ANGULAR/body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACESSORIOSComponent } from './ANGULAR/acessorios/acessorios.component';
import { GAMESComponent } from './ANGULAR/games/games.component';


const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'acessorios', component: ACESSORIOSComponent},
  {path: 'emais', component: EMAISComponent},
  {path: 'games', component: GAMESComponent},
  {path: 'pc', component: PCComponent},
  {path: 'utilitarios', component: UTILITARIOSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
