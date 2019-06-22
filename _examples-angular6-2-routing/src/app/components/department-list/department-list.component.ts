import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
  public departments = [
    { 'id': 1, 'name': 'JavaScript' },
    { 'id': 2, 'name': 'Angular' },
    { 'id': 3, 'name': 'NodeJS' },
    { 'id': 4, 'name': 'ReactJS' },
    { 'id': 5, 'name': 'VueJs' },
  ]

  public selectedDepartmentId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')); // let id = Number(params.get('id'))
      this.selectedDepartmentId = id;
    })
  }

  /* on department click */
  onLinkSelect(curDepartment) {
    console.log('onLinkSelect curDepartment');
    // navigate ( path, route parameter)
    // this.router.navigate(['departments', curDepartment.id]);

    // relative path, links parameter array, relativeTo property
    this.router.navigate([curDepartment.id], { relativeTo: this.activatedRoute }); // to the current route  append the department id and navigate to that URL
  }

  // to compare/match current route clicked and optional parameter
  isSelectedRouteMatchOptionalParam(curDepartment) {
    return curDepartment.id === this.selectedDepartmentId;
  }

}
