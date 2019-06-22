import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { WildcardPagenotfoundComponent } from './components/wildcard-pagenotfound/wildcard-pagenotfound.component';

const routes: Routes = [
  // default path
  // { path: '', component:DepartmentListComponent},
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id', component: DepartmentDetailsComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ]
  },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '**', component: WildcardPagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// to store all routing component and avoid importing/writing duplicate list of components in app.routing.module / app.module.
// create a array of all routing components export it, than import it in app.module.ts
export const RoutingComponents = [
  DepartmentContactComponent,
  DepartmentDetailsComponent,
  DepartmentListComponent,
  DepartmentOverviewComponent,
  EmployeeListComponent,
  HomeComponent,
  ProductListComponent,
  WildcardPagenotfoundComponent,
]
