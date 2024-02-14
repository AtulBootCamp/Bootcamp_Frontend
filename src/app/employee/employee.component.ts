import { Component } from '@angular/core';
import { Employee } from '../interface/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees:Employee[]=[];

  constructor(public employeeService:EmployeeService){}

  ngOnInit(): void{
    console.log("Inside ngOnInit()");      
      this.getAllEmployees();
  }

  getAllEmployees(){
    this.employeeService.getAll().subscribe((data:Employee | Employee[])=>{
      if(Array.isArray(data))
        this.employees=data;
      else
        this.employees=[data];
      
      console.log(this.employees);
    });
  }

  deleteEmployee(id:number){
    console.log(id);
    this.employeeService.delete(id).subscribe(()=>{
      this.employees = this.employees.filter(employee => employee.id !== id);
    });

  }

  

}
