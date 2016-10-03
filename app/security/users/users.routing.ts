
import { RouterModule  }    		  from '@angular/router';

import { UserFormComponent } 		  from './user-form.component';
import { UsersComponent }    		  from './users.component';
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