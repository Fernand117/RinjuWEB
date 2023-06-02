import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { RolesComponent } from './pages/roles/roles.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RolesDialogComponent } from './components/roles-dialog/roles-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    EmpleadosComponent,
    RolesComponent,
    RolesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
