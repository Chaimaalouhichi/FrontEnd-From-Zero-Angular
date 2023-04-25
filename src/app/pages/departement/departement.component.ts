import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api/confirmationservice';
import { MessageService } from 'primeng/api/messageservice';
import { Departement } from 'src/app/models/departement';
import { DepartementService } from 'src/app/services/serviceemp/services/departement.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  selectedDepartement!: Departement[];
 // departements! : Departement[]; // with table
  departements! :Array <Departement>; //with list
  //dept : Departement=new Departement();
 
departement
  constructor(private servicedepartement:DepartementService, private router:Router, private route:ActivatedRoute,private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.reloadData()
  }
reloadData(){
  this.servicedepartement.listedepartement().subscribe({
    next:(data)=> {
      this.departements=data
      console.log(this.departements)
    },
    error : (err)=>{
       console.log(err)
    }
  })
}
Modiferdepartement(): void {
  if (!this.submitted)
    {
      
      this.servicedepartement.ajouterdepartement(this.departement)
        .subscribe({
          next: (res) => {
          // console.log(res);
            this.submitted = true;
            this.router.navigateByUrl("")
          },
        // error: (e) => console.error(e)
        });
    } 
}
/*Modiferdepartement(id: number){
  this.router.navigate(['/details', id]);
}*/
deleteData(id :number){
  if(id!=undefined && id !=null)
    {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer ce emp!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, gardez-le'
      }).then((result : any) => {
        if (result.value) {
         // alert(id);
         this.servicedepartement.deletedepartement(id).subscribe(res=>{
          this.reloadData()
          })
        Swal.fire(
          'Supprimé!',
          'Votre emp a été supprimé.',
          'success'
        )}

  })
}
}
deleteSelectedDepartement() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selectedDepartement?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.departements = this.departements.filter(val => this.selectedDepartement.includes(val));
          
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
      }
  });
}

}
