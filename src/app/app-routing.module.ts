import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { AddRopaComponent } from './components/add-ropa/add-ropa.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditImageComponent } from './components/edit-image/edit-image.component';
import { EditRopaComponent } from './components/edit-ropa/edit-ropa.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterRoleComponent } from './components/register-role/register-role.component';
import { RegisterComponent } from './components/register/register.component';
import { RopaCategoriaComponent } from './components/ropa-categoria/ropa-categoria.component';
import { RopaDetailsComponent } from './components/ropa-details/ropa-details.component';
import { RopaComponent } from './components/ropa/ropa.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ropa', component: RopaComponent },
  { path: 'ropa/add-ropa', component: AddRopaComponent, canActivate: [AuthGuard] },
  { path: 'ropa/:id/view', component: RopaDetailsComponent },
  { path: 'ropa/:id/edit', component: EditRopaComponent, canActivate: [AuthGuard] },
  { path: 'ropas/categoria/:nombreCategoria', component: RopaCategoriaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'categoria/add-categoria', component: AddCategoriaComponent, canActivate: [AuthGuard] },
  { path: 'register-role', component: RegisterRoleComponent, canActivate: [AuthGuard] },
  { path: "ropa/:id/editImage", component: EditImageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
