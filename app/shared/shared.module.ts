
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { PaginationComponent } from './components/pagination.component';
import { SpinnerComponent }    from './components/spinner.component';
import { FocusDirective }    from './directives/focus.directive';


import { CommonService }    from './helpers/common.service';
import { ConstantsService }    from './helpers/constants.service';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationComponent, 
        SpinnerComponent,
        FocusDirective,
    ],
    providers: [CommonService, ConstantsService],
    exports: [
        PaginationComponent, 
        SpinnerComponent,
        FocusDirective
    ]
})
export class SharedModule { 
}