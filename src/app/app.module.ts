import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';

import { SharedModule } from './components/shared/shared.module';
import { AddRopaComponent } from './components/add-ropa/add-ropa.component';
import { EditRopaComponent } from './components/edit-ropa/edit-ropa.component';
import { RopaDetailsComponent } from './components/ropa-details/ropa-details.component';
import { RopaCategoriaComponent } from './components/ropa-categoria/ropa-categoria.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { RegisterRoleComponent } from './components/register-role/register-role.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RopaComponent,
    ContactoComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    AddRopaComponent,
    RopaDetailsComponent,
    EditRopaComponent,
    RopaCategoriaComponent,
    AddCategoriaComponent,
    RegisterRoleComponent,
    EditImageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
