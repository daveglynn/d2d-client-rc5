import { Component, OnInit } from "@angular/core";
// required for this component
import { AuthService } from "./security/auth/auth.service";

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html'
})
export class NavBarComponent implements OnInit {
    constructor(private _authService: AuthService) { }

    ngOnInit() {

    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }
}

