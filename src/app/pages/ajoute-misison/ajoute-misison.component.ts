import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Mission } from 'src/app/models/mission';
import { EmployeeService } from 'src/app/services/serviceemp/services/employee.service';
import { MissionService } from 'src/app/services/serviceemp/services/mission.service';


@Component({
  selector: 'app-ajoute-misison',
  templateUrl: './ajoute-misison.component.html',
  styleUrls: ['./ajoute-misison.component.css']
})
export class AjouteMisisonComponent implements OnInit {
  //missions!:Mission;
  missions : Mission = new Mission()
  errormessage!:String;
  employees!:Employee[];
  selectedEmployee!:number[];
  constructor(private missionService:MissionService,private router:Router,
    private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.ListEmployee()
  }
  AjouterMission(mission:Mission){
const misss = {
  id:mission.id,
  name:mission.name,
  period:mission.period,
  datedebut:mission.datedebut,
  datefin:mission.datefin,
  employeesdto:this.selectedEmployee
  //

}
   console.log(misss)
  //employee.departementdto.id=id;
    this.missionService.ajouterMission(misss).subscribe({
      next:data=>{alert("departement saved");
      
    },
      error:err=>{this.errormessage = err.error.message;
      }
      
    })
}
ListEmployee() {
  this.employeeService.listeEmployee().subscribe({
    next: (data) => {
      this.employees = data
      console.log(this.employees)
    },
    error: (err) => {
      console.log(err)
    }
  });
  
}
}
