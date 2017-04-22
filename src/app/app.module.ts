import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { CancionComponent } from './cancion/cancion.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListarplaylistComponent } from './listarplaylist/listarplaylist.component';
import { AdministrarplaylistComponent } from './administrarplaylist/administrarplaylist.component';
import { AdministrarcancionComponent } from './administrarcancion/administrarcancion.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    PlaylistComponent,
    UsuarioComponent,
    RouterModule,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    PerfilComponent,
    ListarplaylistComponent,
    AdministrarplaylistComponent,
    AdministrarcancionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
