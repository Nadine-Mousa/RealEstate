import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './services/user.service';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';

const appRoutes : Routes = [
  {path: '', component: PropertyListComponent},
  // All properties
  { path: 'properties', component: PropertyListComponent },
  // For sale properties
  { path: 'properties/sale', component: PropertyListComponent },
  // For rent properties
  { path: 'properties/rent', component: PropertyListComponent },
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },




  {path: '**', component: PageNotFoundComponent},


]
@NgModule({ declarations: [
        AppComponent,
        PropertyCardComponent,
        PropertyListComponent,
        NavBarComponent,
        AddPropertyComponent,
        PropertyDetailsComponent,
        PageNotFoundComponent,
        RegisterComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        RouterModule.forRoot(appRoutes, {}),
        FormsModule,
        ReactiveFormsModule], providers: [
        HousingService,
        UserService,
        AlertifyService,
        AuthService,
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
