import { Component } from '@angular/core';
 
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
            <my-error></my-error>
        </div>

    `
})
export class AppComponent { 
}