import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Mission } from 'src/app/models/mission';
import { EmployeeService } from 'src/app/services/serviceemp/services/employee.service';
import { MissionService } from 'src/app/services/serviceemp/services/mission.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  missions!: Array<Mission>; //with list
  mission!:Mission;
  employees!: Employee[];
  constructor(private missionService:MissionService,private router:Router,private activateRoute:ActivatedRoute,
    private employeeService:EmployeeService) { }


  ngOnInit(): void {
    this.reloadData();
    console.log(this.employees),
    this.ListEmployee();
  }
  reloadData() {
    this.missionService.listeMission().subscribe({
      next: (data) => {
        this.missions= data
        console.log(this.employees)
      },
      error: (err) => {
        console.log(err)
      }
    });
    
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
  ModiferMission(id: number) {
    this.router.navigate(['/details', id]);
  }
  deleteData(id: number) {
    if (id != undefined && id != null) {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce emp!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result: any) => {
        if (result.value) {
          // alert(id);
          this.missionService.deleteMission(id).subscribe(res => {
            this.reloadData()
          })
          Swal.fire(
            'Supprimé!',
            'Votre Mission a été supprimé.',
            'success'
          )
        }

      })
    }
  }
}