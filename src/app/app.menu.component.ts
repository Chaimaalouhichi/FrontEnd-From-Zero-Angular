import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];
role:any
    constructor(public appMain: AppMainComponent,public authService:AuthService) { }

    ngOnInit() {
        this.role=this.authService.getRole()
console.log(this.role)
//if (this.role==1){
        this.model = [
            
            {
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']}
                ]
            },
            {
                label: 'UI Components',
                items: [
                    
                    
                    
                    {label: 'Contact', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/contact']},
                    {label: 'Departement', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/departement']},
                    {label: 'Mission', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/mission']},
                    {label: 'Employee', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/employer']},
                   
                ]
            },
            
            
           
           
           
        ];
    
    
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
