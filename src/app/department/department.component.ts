import { Component } from '@angular/core';
import { DepartmentService } from '../service/department.service';
import { Department } from '../interface/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  departments:Department[]=[];
  constructor(public departmentService:DepartmentService){}

  ngOnInit(): void{
    console.log("Inside ngOnInit()");      
      this.getDepartments();
  }

  getDepartments(){
    this.departmentService.getAll().subscribe((data:Department | Department[])=>{
      if(Array.isArray(data))
        this.departments=data;
      else
        this.departments=[data];   

      console.log(this.departments);
    });
  }

  deleteDepartment(id:number){
      console.log(id);
      this.departmentService.delete(id).subscribe(()=>{
        this.departments = this.departments.filter(department => department.id !== id);
      });
    }


}
