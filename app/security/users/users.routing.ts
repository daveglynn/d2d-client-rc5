                      
/******************************************************************************************************
 
 Copyright 2016 Olympus Consultancy Limited - All Rights Reserved 
 You may NOT use, copy, distribute or modify this code unless you have written 
 consent from the author which may be obtained from emailing dave@ocl.ie 

******************************************************************************************************/

/******************************************************************************************************
 routing layer
******************************************************************************************************/

import { RouterModule  }    		  from '@angular/router';
import { UserFormComponent } from './user-form.component';
import { UsersComponent } from './users.component';
import { PreventUnsavedChangesGuard } from '../../prevent-unsaved-changes-guard.service';

export const usersRouting = RouterModule.forChild([
	{ 
		path: 'users/add', 
		component: UserFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
    },
    {
        path: 'users/view/:id',
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'users/edit/:id',
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'users/delete/:id',
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },

    { path: 'users', component: UsersComponent },
]);

	
