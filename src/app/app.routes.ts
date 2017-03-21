import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

// para rutas hijas imaginemos que estamos usando... usuario/10/nuevo

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id', // imaginemos que enviamos el parámetro 10
    component: UsuarioComponent,
    children: USUARIO_ROUTES },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);



