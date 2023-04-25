import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MediaComponent } from './components/media/media.component';

import { AppMainComponent } from './app.main.component';


import { LoginComponent } from './components/login/login.component';






import { ContactComponent } from './contact/contact.component';
import { DepartementComponent } from './pages/departement/departement.component';
import { MissionComponent } from './pages/mission/mission.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AjouteMisisonComponent } from './pages/ajoute-misison/ajoute-misison.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetalisEmployeeComponent } from './pages/detalis-employee/detalis-employee.component';
import { NewEmployeeComponent } from './pages/new-employee/new-employee.component';
import { NewdepartementComponent } from './pages/newdepartement/newdepartement.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/ajoute-misison', component:AjouteMisisonComponent},
                    {path: 'uikit/details', component:DetailsComponent},
                    {path: 'uikit/detalis-employee', component:DetalisEmployeeComponent },
                    {path: 'uikit/mission', component:MissionComponent},
                    {path: 'uikit/employer', component:EmployeeComponent},
                    {path: 'uikit/departement', component:DepartementComponent},
                    {path: 'uikit/new-employee', component:NewEmployeeComponent},   
                    {path: 'uikit/newdepartement', component: NewdepartementComponent},
                    {path: 'uikit/contact', component:ContactComponent},
                   
                ],
            },
            
            {path:'login', component: LoginComponent},
        
           
            
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
