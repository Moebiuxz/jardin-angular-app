import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from "./login.component";
import { RegisterComponent } from "./register.component";
import { DefaultComponent } from "./default.component";

export const routes: RouterConfig = [
    {path: '',
    redirectTo: '/index',
    terminal: true
    },
    {path: 'index', component: DefaultComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegisterComponent}
];

export const APP_ROUTER_PROVIDES = [
    provideRouter(routes)
];