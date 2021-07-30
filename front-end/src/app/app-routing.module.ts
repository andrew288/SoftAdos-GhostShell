import { ArticuloComponent } from './components/articulo/articulo/articulo.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { PerfilComponent } from './components/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'; 

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'filtros',
        component: FiltrosComponent,
      },
      {
        path: 'contacto',
        component: ContactComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [CheckLoginGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'profile',
        component: PerfilComponent,
      },
      {
        path: 'articulo/:variable',
        component: ArticuloComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
