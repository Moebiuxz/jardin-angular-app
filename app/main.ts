import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDES } from "./app.routes";

bootstrap(AppComponent, [APP_ROUTER_PROVIDES]).catch(err=>console.log(err));
