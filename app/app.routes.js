"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
var default_component_1 = require("./default.component");
exports.routes = [
    { path: '',
        redirectTo: '/index',
        terminal: true
    },
    { path: 'index', component: default_component_1.DefaultComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'registro', component: register_component_1.RegisterComponent }
];
exports.APP_ROUTER_PROVIDES = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map