import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './ANGULAR/body/body.component';
import { GAMESComponent } from './ANGULAR/games/games.component';
import { ACESSORIOSComponent } from './ANGULAR/acessorios/acessorios.component';
import { PCComponent } from './ANGULAR/pc/pc.component';
import { UTILITARIOSComponent } from './ANGULAR/utilitarios/utilitarios.component';
import { EMAISComponent } from './ANGULAR/emais/emais.component';
import { CadastroComponent } from './ANGULAR/cadastro/cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    GAMESComponent,
    ACESSORIOSComponent,
    PCComponent,
    UTILITARIOSComponent,
    EMAISComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
