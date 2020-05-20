import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { ShowOrdersComponent } from './pages/show-orders/show-orders.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'showOrders',canActivate:[AuthGuard], component: ShowOrdersComponent },
  { path: 'createUser', component: CreateUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class RoutingModule { }

export const routingComponents = [HomeComponent, LogInComponent, ShowOrdersComponent, CreateUserComponent]

//--module app