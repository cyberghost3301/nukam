import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './examples/login/login.component'; // Keeping Login for Admin

import { TeamComponent } from './team/team.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// IMPORT DASHBOARD COMPONENTS
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes =[
    // Home
    { path: '', component: ComponentsComponent, pathMatch: 'full', data: { title: 'Home | Spirecrest' } }, 
    { path: 'index', redirectTo: '', pathMatch: 'full' }, 

    // Admin Portal (Uses the Login Component)
    { path: 'admin', component: LoginComponent, data: { title: 'Admin Portal | Spirecrest' } }, 

    // Admin Dashboard (Protected)
    { 
        path: 'dashboard', 
        component: AdminDashboardComponent, 
        canActivate: [AuthGuard], 
        data: { title: 'Dashboard | Spirecrest' } 
    },

    // Main Pages
    { path: 'team', component: TeamComponent, data: { title: 'Our Team | Spirecrest' } },
    { path: 'profile/:id', component: TeamProfileComponent, data: { title: 'Team Profile | Spirecrest' } },
    { path: 'service/:id', component: ServiceDetailsComponent, data: { title: 'Services | Spirecrest' } },
    { path: 'about', component: AboutComponent, data: { title: 'About Us | Spirecrest' } },

    // Contact (Lazy Loaded)
    { 
        path: 'contact', 
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
        data: { title: 'Contact Us | Spirecrest' }
    },

    // Wildcard (404)
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found | Spirecrest' } }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }