
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';
import { SharedModule }        from '../shared/shared.module';

import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http'; 

import { User }                from './users/user';
import { UserFormComponent }   from './users/user-form.component';
import { UsersComponent }      from './users/users.component';
import { TableSimpleComponent }    from '../shared/components/tableSimple.component';
/* import { UserService }         from './user.service'; */
import { ErrorService } from ".././errors/error.service";
import { ProfileService } from '../master/profiles/profile.service';
import { LanguageService } from '../master/languages/language.service';
import { CommonService } from   '../shared/helpers/common.service'; 

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        SharedModule 
    ],
    declarations: [
        UserFormComponent, 
        UsersComponent,
        TableSimpleComponent
    ],
    exports: [
        UserFormComponent, 
        UsersComponent
    ],
    providers: [
        PreventUnsavedChangesGuard,
        ErrorService,
        ProfileService,
        LanguageService 
    ]
})
export class UsersModule { 
}