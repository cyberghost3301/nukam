import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module'; 
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'; // <--- IMPORT

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        TeamComponent,
        TeamProfileComponent,
        ServiceDetailsComponent,
        AboutComponent,
        PageNotFoundComponent,
        AdminDashboardComponent // <--- DECLARE
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }