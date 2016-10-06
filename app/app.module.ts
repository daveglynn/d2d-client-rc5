
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { CommonModule }        from '@angular/common';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { SharedModule }      from './shared/shared.module';
import { RouterModule }        from '@angular/router';
import { PostsModule }       from './posts/posts.module';
import { HttpModule }          from '@angular/http'; 

import { User }                from './security/users/user';
import { UserFormComponent }   from './security/users/user-form.component';
import { UsersComponent }      from './security/users/users.component';
import { TableSimpleComponent }    from './shared/components/tableSimple.component';

import { ErrorService } from "./errors/error.service";
import { ProfileService } from './master/profiles/profile.service';
import { LanguageService } from './master/languages/language.service';
import { AuthService } from "./security/auth/auth.service";

import { AuthenticationComponent }      from './security/auth/auth.component';

import { SignupComponent }   from './security/auth/signup.component';
import { SigninComponent }   from './security/auth/signin.component';

import { AppComponent }      from './app.component';
import { HomeComponent }     from './home.component';
import { NavBarComponent }   from './navbar.component';
import { NotFoundComponent } from './not-found.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { usersRouting }      from './security/users/users.routing';
import { postsRouting }      from './posts/posts.routing';
import { routing }           from './app.routing';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        SharedModule,
        PostsModule,
        usersRouting,
        postsRouting,
        HttpModule,
        routing, FormsModule, ReactiveFormsModule        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavBarComponent,
        NotFoundComponent,
        UserFormComponent,
        UsersComponent,
        TableSimpleComponent,
        AuthenticationComponent,
        SignupComponent,
        SigninComponent
    ],
    exports: [
        UserFormComponent,
        UsersComponent,
        AuthenticationComponent,
        SignupComponent,
        SigninComponent,
        AuthenticationComponent
    ],
    providers: [
        PreventUnsavedChangesGuard,
        ErrorService,
        ProfileService,
        LanguageService,
        AuthService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { 
}