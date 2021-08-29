import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DproductoComponent } from './pages/dproducto/dproducto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registro",component:RegistroComponent},
  {path:"dproducto/:id",component:DproductoComponent},
  {path:"404",component:NotfoundpageComponent},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
