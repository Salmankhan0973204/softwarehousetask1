import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CalenderComponent } from './calendar/calender.component';
import { ChatAppComponent } from './chat-app/chat-app.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { FormsModule, ReactiveFormsModule , } from '@angular/forms';
import { ContactEmployeeComponent } from './contact-employee/contact-employee.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalenderComponent,
    ChatAppComponent,
    SupportTicketComponent,
    ContactEmployeeComponent,
    ContactGridComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
