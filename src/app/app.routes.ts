import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LogingComponent } from './components/login/loging.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        pathMatch:'full'
    },
    {  
        path:'sobre',
        component: SobreComponent,
        pathMatch:'full'
        
    },
    {
        path:'produtos',
        component: ProdutosComponent,
        canActivate:[AuthGuard]
    }, 
    {
        path:'login', 
        component: LogingComponent, 
        
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
