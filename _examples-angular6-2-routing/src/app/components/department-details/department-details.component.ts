import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  
  // to hold the currently passed id parameter
  public selectedDepartmentId;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // read the route parameter

    // snapshot approach 
    // console.log(this.activatedRoute.snapshot.paramMap);
    // let routeParamId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.selectedDepartmentId = routeParamId;

    // paramMap Observable approach 
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedDepartmentId = id;
    })
  }

  /* Previous/Back button click */
  goPrevious() {
    let previousId = this.selectedDepartmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  /* Next button click */
  goNext() {
    let nextId = this.selectedDepartmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  // back button - method to handle optional parameters and show current department highlighted
  goToDepartments() {
    console.log('goToDepartments clicked');
    let currentSelectedId = this.selectedDepartmentId ? this.selectedDepartmentId : null
    //sending optional parameter - used for some logic
    //this.router.navigate(["/departments", { id: currentSelectedId, test: 'test-param-value' }])

    // relative path, links parameter array - {key:value}, {relativeTo property}
    // we can pass multiple parameters as per our requirements
    // this.router.navigate(['../', { id: currentSelectedId, name: 'Hello'  }]);
    this.router.navigate(['../', { id: currentSelectedId }], { relativeTo: this.activatedRoute });  // to the current route  append the department id and navigate to that URL
  }

  /* on overview button click */
  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.activatedRoute })
  }

  /* on contact button click */
  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.activatedRoute })
  }

}
