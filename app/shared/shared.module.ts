
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { PaginationComponent } from './components/pagination.component';
import { SpinnerComponent }    from './components/spinner.component';
import { FocusDirective }    from './directives/focus.directive';
import { CommonService }    from './helpers/common.service';
import { ConstantsService }    from './helpers/constants.service';

import { ErrorService } from "../errors/error.service";
import { ErrorComponent } from "../errors/error.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationComponent, 
        SpinnerComponent,
        FocusDirective,
        ErrorComponent 
    ],
    providers: [CommonService, ConstantsService, ErrorService],
    exports: [
        PaginationComponent, 
        SpinnerComponent,
        FocusDirective,
        ErrorComponent
    ]
})
export class SharedModule { 
}