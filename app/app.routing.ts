
import { RouterModule  }     from '@angular/router';
import { AUTH_ROUTES } from "./security/auth/auth.routes";
import { AuthenticationComponent } from "./security/auth/auth.component";
import { HomeComponent }     from './home.component';
import { NotFoundComponent } from './not-found.component';
export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
    {
        path: 'auth', component: AuthenticationComponent, children: [
            ...AUTH_ROUTES
        ]
    },
	{ path: '**', redirectTo: 'not-found' }
]);