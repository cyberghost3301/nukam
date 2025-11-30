import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  members: any[] = [];

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    // Subscribe so the list updates automatically if data changes
    this.teamService.team$.subscribe(data => {
        this.members = Object.values(data);
    });
  }

  toggleStatus(member: any) {
    const newStatus = member.status === 'Active' ? 'On Leave' : 'Active';
    this.teamService.updateMember(member.key, { status: newStatus });
  }

  resetTeamData() {
      if(confirm('Are you sure you want to reset all team data to default?')) {
          this.teamService.resetToDefaults();
      }
  }

  logout() {
    localStorage.removeItem('isSpirecrestAdmin');
    this.router.navigate(['/admin']);
  }
}