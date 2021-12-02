import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calendar/calender.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { ContactEmployeeComponent } from './contact-employee/contact-employee.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';



const routes: Routes = [
  { path: 'c', component: ChatAppComponent },
  { path: 's', component: SupportTicketComponent },
  { path: 'cc', component: ContactEmployeeComponent },
  {path:'', component:ContactGridComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
