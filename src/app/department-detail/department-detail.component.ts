import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department-detail {{dept_id}}
    </p>
    <div>
      <a (click)="showOverview()">Overview</a>
      <a (click)="showContact()">Contact</a>
    </div>
    <router-outlet></router-outlet>
    <a (click)="goPrevious()" [class.d-none]="checkId()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
      <a (click)="gotoDept()">Back</a>
    </div>
  `,
  styles: [`.d-none{display:none}`]
})
export class DepartmentDetailComponent implements OnInit {
  public dept_id;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.dept_id = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.dept_id = id;
    });
  }
  checkId(){
    return this.dept_id <2;
  }
  goPrevious(){
    let previousId = this.dept_id -1;
    //this.router.navigate(['/departments', previousId])
    this.router.navigate(['../'+previousId], {relativeTo: this.route});
  }
  goNext(){
    let nextId = this.dept_id +1;
    //this.router.navigate(['/departments', nextId])
    this.router.navigate(['../'+nextId], {relativeTo: this.route});
  }
  gotoDept(){
    let selectedId = this.dept_id ? this.dept_id : null;
    //this.router.navigate(['/departments', {id: selectedId}])
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
