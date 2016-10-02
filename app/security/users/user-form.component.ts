import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup }    from '@angular/forms';
import {   Validators } from '@angular/common';
import { Router, ActivatedRoute }                from '@angular/router';
import { Control } from "@angular/common";

import { ClientValidators }                       from '../../shared/validators/client.validators';
import { UserService }                           from './user.service';
import { User }                                  from './user';
import { DropDown} from "../../shared/helpers/dropdown";

import { Location } from '@angular/common';

import { CommonService } from   '../../shared/helpers/common.service';
import { ProfileService } from '../../master/profiles/profile.service';
import { LanguageService } from '../../master/languages/language.service';
import { ErrorService } from "../.././errors/error.service";


@Component({
    templateUrl: 'app/security/users/user-form.component.html'
})

export class UserFormComponent implements OnInit {
    
    // interface to other components
    @Input() InputMode: string;
    @Input() InputModal: string;

    // control template modal
    modalClass: string = "";
    modalDisplay: string = "";
    allDisplay: string = "";

    dropdownProfileId = 0;
    dropdownProfileName = '';

    // this control
    mode: string;
    modal: string;
    form: FormGroup;
    title: string;
    //form: ControlGroup;
    action: string;

    profilesLoaded: boolean = false;
    languagesLoaded: boolean = false;

    profiles = [];
    languages = [];

    userLoading;

    // disablers
    active_disabled: boolean = false;
    firstName_disabled: boolean = false;
    lastName_disabled: boolean = false;
    email_disabled: boolean = false;
    password_disabled: boolean = false;
    profileId_disabled: boolean = false;
    languageId_disabled: boolean = false;
    phone_disabled: boolean = false;
    addressLine1_disabled: boolean = true;
    addressLine2_disabled: boolean = false;
    addressLine3_disabled: boolean = false;
    addressLine4_disabled: boolean = false;
    enabledFrom_disabled: boolean = false;
    enabledTo_disabled: boolean = false;

 

    // create a new instance 

    user = new User(null, null, null, null, true, null, null, null, null, null, null, null, null, null, null);
    

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UserService,
        private _profileService: ProfileService,
        private _languageService: LanguageService,
        private _errorService: ErrorService,
        private _location: Location,
        private _commonService: CommonService 
    ) {


        // determine what action the form is in
        if (this._router.url.toLowerCase.name == "adduser") {
            this.action = "add";
        } else if (this._router.url.toLowerCase.name === "viewuser") {
            this.action = "view";
        } else if (this._router.url.toLowerCase.name === "edituser") {
            this.action = "edit";
        } else if (this._router.url.toLowerCase.name === "deleteuser") {
            this.action = "delete";
        } else this.action = "";



        // set up the field validators
        if ((this.action === "add") || (this.action === "edit")) {
 
        }

        if (this.action === "add") {
 
        }

        if ((this.action === "view") || (this.action === "delete")) {

 
        }


        // if (this.action === "add") {
        //     this.languages.push(new DropDown(-1, "(None)"));
        //     this.user.languageId = -1;
        //  

 
        // set up the form design
        this.form = fb.group({
            active: [''],
            firstName: Validators.compose([
                Validators.required,
                ClientValidators.isEmpty,
                ClientValidators.outOfRange50
            ]),
            lastName: Validators.compose([
                Validators.required,
                ClientValidators.isEmpty,
                ClientValidators.outOfRange50
            ]),
            email: Validators.compose([
                Validators.required,
                ClientValidators.isEmpty,
                ClientValidators.containsSpace,
                ClientValidators.invalidEmailAddress,
                ClientValidators.outOfRange50
            ]),
            password: Validators.compose([
                Validators.required,
                ClientValidators.isEmpty,
                ClientValidators.outOfRange50,
                ClientValidators.containsSpace,
                ClientValidators.invalidPassword
            ]),
            profileId: Validators.compose([
                ClientValidators.outOfRange50
            ]),
            languageId: Validators.compose([
                Validators.required,
                ClientValidators.isEmpty,
                ClientValidators.dropDownNotSelected
            ]),
            phone: Validators.compose([
                ClientValidators.outOfRange50
            ]),
            enabledFrom: [''],
            enabledTo: [''],
            address: fb.group({
                addressLine1: Validators.compose([
                    ClientValidators.outOfRange50
                ]),
                addressLine2: Validators.compose([
                    ClientValidators.outOfRange50
                ]),
                addressLine3: Validators.compose([
                    ClientValidators.outOfRange50
                ]),
                addressLine4: Validators.compose([
                    ClientValidators.outOfRange50
                ])
            })

        });
	}

    ngOnInit() {

        this.setupForm();

    }

    private setupForm() {

        //set modal
        this.modalProcessing()

        var id = this._route.snapshot.params['id'];
        debugger;
       
        //var id = this._route.params.subscribe(params => {
        //    console.log(params["id"]);
        //    var id = +params["id"];
       // });
   
        if (this.action === 'edit') {
            this.title = 'Edit User'
        } else if (this.action === 'view') {
            this.title = 'View User'
        } else if (this.action === 'add') {
            this.title = 'Add User'
        } else if (this.action === 'delete') {
            this.title = 'Delete User'
        }

        // set disablers as required
        //this.firstName_disabled: boolean = false;
        //this.lastName_disabled: boolean = false;
        //this.email_disabled: boolean = false;
        //this.password_disabled: boolean = false;
        //this.phone_disabled: boolean = false;
        //this.addressLine1_disabled: boolean = false;
        //this.addressLine2_disabled: boolean = false;
        //this.addressLine3_disabled: boolean = false;
        //this. addressLine4_disabled: boolean = false;
        debugger;
    
        //get data if requested
        if (!id)
            return;
        this.userLoading = true;
        this._userService.getUserById(id)
            .subscribe(
            data => this.handleData('getUserById', data),
            error => this.handleError('getUserById', error),
            () => this.handleSuccess('getUserById')
            );

    }

    private modalProcessing() {

        this._route.params.subscribe(params => {
            this.mode = this._commonService.setMode(this.InputMode, params['mode'])
            this.modal = this._commonService.setModal(this.InputModal, params['modal'])
        });

        if (this.modal === "true") {
            this.modalClass = "modal"
            this.modalDisplay = 'block'
            this.allDisplay = 'block'
        } else {
            this.modalClass = ""
            this.modalDisplay = 'none'
            this.allDisplay = 'block'
        }
    }

    routerCanDeactivate() {

        if (this.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }

    save() {

        this.userLoading = true;

        if (this.user.id) {
            if (this.action === 'edit') {
                this._userService.updateUser(this.user)
                    .subscribe(
                    data => this.handleData('updateUser', data),
                    error => this.handleError('updateUser', error),
                    () => this.handleSuccess('updateUser')
                    );
            }
            if (this.action === 'delete') {
                this._userService.deleteUser(this.user.id)
                    .subscribe(
                    data => this.handleData('deleteUser', data),
                    error => this.handleError('deleteUser', error),
                    () => this.handleSuccess('deleteUser')
                    );
            }

        } else {
            this._userService.addUser(this.user)
                .subscribe(
                data => this.handleData('addUser', data),
                error => this.handleError('addUser', error),
                () => this.handleSuccess('addUser')
                );
        }

    }

    private loadProfiles() {
        if (this.profilesLoaded == false) {
            this._profileService.getProfilesAll()
                .subscribe(
                data => this.handleData('loadProfiles', data),
                error => this.handleError('loadProfiles', error),
                () => this.handleSuccess('loadProfiles')
                );
            this.profilesLoaded = true;
        }
    }

    private loadLanguages() {
        if (this.languagesLoaded == false) {
            this._languageService.getLanguagesAll()
                .subscribe(
                data => this.handleData('loadLanguages', data),
                error => this.handleError('loadLanguages', error),
                () => this.handleSuccess('loadLanguages')
                );
            this.languagesLoaded = true;
        }
    }


    cancel() {
        this._router.navigate(['Users']);
    }

    handleError(process, error: any) {
 
        this.userLoading = false;
        // this is not an error , but delete request is throwing it. Angular bug
        // therefore treat it as a success
        if (error.message != "error.json is not a function") {
            this._errorService.handleError(error);
        } else {
            this.handleSuccess(process)
        }
        console.log("handle error");
        this._errorService.handleError(error);
        if (error.status == 404) {
            this._router.navigate(['NotFound']);
        }
    }

    handleData(process, data: any) {
 
        this.userLoading = false;
        console.log("handle data");
        console.log(data);

        if (process === 'getUserById') {
            this.user = data;
            this.user.enabledFrom = this._commonService.getLocalDate(this.user.enabledFrom);
            this.user.enabledTo = this._commonService.getLocalDate(this.user.enabledTo);
            this.languages.push(new DropDown(data.languageId, data.language.name));

        }
        if (process === 'loadProfiles') {
            this.profiles = data;
        }
        if (process === 'loadLanguages') {
            this.languages = data;
        }
    }

    handleSuccess(process) {
       
        this.userLoading = false;
        console.log("handle success");
        // Ideally, here we'd want:
        // this.form.markAsPristine();
        this.languages = this.languages;
        if ((process != 'getUserById') && (process != 'loadLanguages') && (process != 'loadProfiles')) {
            // this._router.navigate(['Users']);
            this._location.back();
        }
    }
}