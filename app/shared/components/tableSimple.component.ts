﻿import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {OrderBy} from ".././pipes/orderBy.pipe"
import {Format} from ".././pipes/format.pipe"

 
@Component({
    selector: 'table-simple',
    templateUrl: 'app/shared/components/tableSimple.component.html',
    pipes: [OrderBy, Format] 
})
export class TableSimpleComponent implements OnInit {
    @Input() InputModal: string;
    @Input() InputPreButtons: any[];
    @Input() InputColumns: any[];
    @Input() InputButtons: any[];
    @Input() InputData: any[];
    @Input() InputSort: any;

    modal: string

    @Output() OutputButtonSelectClick = new EventEmitter();

    constructor(
 
    ) {
    
    }

    ngOnInit() {

          this.modal = this.InputModal;
    }

    selectedClass(columnName): string {

        return columnName == this.InputSort.column ? 'sort-' + this.InputSort.descending : "false";
    }

    changeSorting(columnName): void {
        var sort = this.InputSort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string {
        return this.InputSort.descending ? '-' + this.InputSort.column : this.InputSort.column;
    }

    selectAndClose(selection) {
  
        this.OutputButtonSelectClick.next(selection);
    }

}