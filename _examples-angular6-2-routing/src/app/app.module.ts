import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

// RoutingComponents array - list all the components used in application 

// import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
// import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
// import { DepartmentListComponent } from './components/department-list/department-list.component';
// import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { HomeComponent } from './components/home/home.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { WildcardPagenotfoundComponent } from './components/wildcard-pagenotfound/wildcard-pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    // DepartmentDetailsComponent,
    // DepartmentContactComponent,
    // DepartmentOverviewComponent,
    // DepartmentListComponent,
    // EmployeeListComponent,
    // HomeComponent,
    // ProductListComponent,
    // WildcardPagenotfoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
