import { Component, OnInit } from '@angular/core';
import { TeamService, TeamMember } from '../services/team.service';
import { TEAM_MEMBERS, TeamMemberData } from '../shared/team-data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  // Arrays to hold sorted team members
  leadership: TeamMemberData[] = TEAM_MEMBERS;
  management: TeamMember[] = [];
  projectHr: TeamMember[] = [];
  development: TeamMember[] = [];
  support: TeamMember[] = [];
  team: TeamMember[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    // Subscribe to the data so it updates live
    this.teamService.team$.subscribe(data => {
      this.sortMembers(data);
    });
  }

  // Helper to sort members into the correct rows
  sortMembers(data: any) {
    // 1. LEADERSHIP - Now uses centralized TEAM_MEMBERS from shared/team-data.ts
    // (Already initialized in class property)

    // 2. MANAGEMENT (Laraib, Anshuman, Rahul, Aakash)
    this.management = [
      data['laraib'], // Swapped here
      data['anshuman'], 
      data['rahul'], 
      data['aakash']
    ];

    // 3. PROJECT & HR
    this.projectHr = [
      data['shashank'], 
      data['prachi'], 
      data['astha'], 
      data['shristi']
    ];

    // 4. DEVELOPMENT
    this.development = [
      data['sanchita'], 
      data['kavya'], 
      data['janvi'], 
      data['isha']
    ];

    // 5. SUPPORT
    this.support = [
      data['srishti_crgo'], 
      data['anushka'], 
      data['ekta'], 
      data['vaibhavi']
    ];

    // 6. TEAM MEMBERS
    this.team = [
      data['saloni'], 
      data['shivani']
    ];
  }
}