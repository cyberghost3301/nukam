import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-profile',
  templateUrl: './team-profile.component.html',
  styleUrls: ['./team-profile.component.scss']
})
export class TeamProfileComponent implements OnInit {
  
  memberId: string;
  currentMember: any;
  isUnlocked: boolean = false; 
  passwordInput: string = '';
  errorMessage: string = '';

  // --- THE FULL DATABASE (ALL MEMBERS) ---
  teamData = {
    // LEADERSHIP
    'aum': {
      name: 'Aum', role: 'Executive Director', image: 'assets/img/team/ppaum.jpg',
      id: 'SSPL-EXEC-001', status: 'Active', joined: '2018', email: 'aum@spirecrest.in',
      bio: 'Visionary leader driving innovation and strategic growth for Spirecrest.',
      password: 'aumc'
    },
    'deshesh': {
      name: 'Deshesh', role: 'Managing Director', image: 'assets/img/team/ppdeshesh.jpg',
      id: 'SSPL-EXEC-002', status: 'Active', joined: '2018', email: 'deshesh@spirecrest.in',
      bio: 'Overseeing operations and ensuring excellence in execution across all verticals.',
      password: 'desh'
    },
    'saurabh': {
      name: 'Er. Saurabh', role: 'Strategic Advisor', image: 'assets/img/team/ppsaurabh.jpg',
      id: 'SSPL-ADV-001', status: 'Active', joined: '2022', email: 'saurabh.kr@spirecrest.in',
      bio: 'Guiding technical strategy and long-term business development goals.',
      password: 'saur'
    },
    'antara': {
      name: 'Antara', role: 'CMO', image: 'assets/img/team/ppantara.jpg',
      id: 'SSPL-OPS-001', status: 'Active', joined: '2025', email: 'antara.g@spirecrest.in',
      bio: 'Chief of Marketing & Operation managing outreach initiatives & business operations.',
      password: 'anta'
    },

    // MANAGEMENT & OPERATIONS
    'laraib': {
      name: 'Ar. Laraib', role: 'Consulting Architect', image: 'assets/img/team/pplaraib.jpg',
      id: 'SSPL-CONS-001', status: 'Active', joined: '2021', email: 'laraib.a@spirecrest.in',
      bio: 'Leading the design and planning for our Interior & Architecture projects.',
      password: 'lara'
    },
    'anshuman': {
      name: 'Er. Anshuman', role: 'Innovation Catalyst', image: 'assets/img/team/ppanshuman.jpg',
      id: 'SSPL-TECH-001', status: 'Active', joined: '2018', email: 'anshuman.s@spirecrest.in',
      bio: 'Driving technological innovation and R&D initiatives.',
      password: 'ansh'
    },
    'rahul': {
      name: 'Prof. Rahul', role: 'Business Adviser', image: 'assets/img/team/pprahul.jpg',
      id: 'SSPL-ADV-002', status: 'Active', joined: '2021', email: 'rahul.rm@spirecrest.in',
      bio: 'Providing expert guidance on business strategy and market expansion.',
      password: 'rahu'
    },
    'aakash': {
      name: 'Er. Aakash', role: 'External Consultant', image: 'assets/img/team/ppaakash.jpg',
      id: 'SSPL-CONS-002', status: 'Active', joined: '2025', email: 'aakash@spirecrest.in',
      bio: 'Consulting on specialized engineering projects.',
      password: 'aaka'
    },

    // PROJECT & HR
    'shashank': {
      name: 'Er. Shashank', role: 'Project Collaborator', image: 'assets/img/team/ppshashank.jpg',
      id: 'SSPL-PROJ-001', status: 'Active', joined: '2022', email: 'shashank.kr@spirecrest.in',
      bio: 'Collaborating on key infrastructure and technical projects.',
      password: 'shas'
    },
    'prachi': {
      name: 'Prachi', role: 'HRM', image: 'assets/img/team/ppprachi.jpg',
      id: 'SSPL-HRM-001', status: 'Active', joined: '2024', email: 'prachi.s@spirecrest.in',
      bio: 'Managing Human Resources and talent acquisition.',
      password: 'prac'
    },
    'astha': {
      name: 'Astha', role: 'Business Development Executive', image: 'assets/img/team/ppastha.jpg',
      id: 'SSPL-BDE-001', status: 'Active', joined: '2025', email: 'astha.d@spirecrest.in',
      bio: 'Driving business development and client relationships.',
      password: 'asth'
    },
    'shristi': {
      name: 'Shristi', role: 'Growth Facilitator', image: 'assets/img/team/ppshristi.jpg',
      id: 'SSPL-BD-002', status: 'Active', joined: '2018', email: 'shristi.s@spirecrest.in',
      bio: 'Facilitating company growth strategies and outreach.',
      password: 'shri'
    },

    // DEVELOPMENT & SUPPORT
    'sanchita': {
      name: 'Sanchita', role: 'Dev Coordinator', image: 'assets/img/team/ppsanchita.jpg',
      id: 'SSPL-DEV-001', status: 'Active', joined: '2025', email: 'sanchita.n@spirecrest.in',
      bio: 'Coordinating development timelines and software deliverables.',
      password: 'sanc'
    },
    'kavya': {
      name: 'Kavya', role: 'DS/AIML', image: 'assets/img/team/ppkavya.jpg',
      id: 'SSPL-DEV-002', status: 'Active', joined: '2025', email: 'kavya.s@spirecrest.in',
      bio: 'Specialist in Data Science and AI/ML solutions.',
      password: 'kavy'
    },
    'janvi': {
      name: 'Janvi', role: 'Business Operations', image: 'assets/img/team/ppjanvi.jpg',
      id: 'SSPL-OPS-002', status: 'Active', joined: '2025', email: 'janvi.g@spirecrest.in',
      bio: 'Ensuring smooth daily business and administrative operations.',
      password: 'janv'
    },
    'isha': {
      name: 'Isha', role: 'Market Advisor', image: 'assets/img/team/ppisha.jpg',
      id: 'SSPL-MKT-001', status: 'Active', joined: '2025', email: 'isha.a@spirecrest.in',
      bio: 'Advising on market trends and consumer behavior.',
      password: 'isha'
    },

    // SUPPORT & TEAM
    'srishti': {
      name: 'Srishti', role: 'CRGO', image: 'assets/img/team/ppsrishti.jpg',
      id: 'SSPL-OPS-003', status: 'Active', joined: '2025', email: 'srishti.s@spirecrest.in',
      bio: 'Chief Revenue Growth Officer.',
      password: 'sris'
    },
    'anushka': {
      name: 'Anushka', role: 'Project Co-ord.', image: 'assets/img/team/ppanushka.jpg',
      id: 'SSPL-PROJ-002', status: 'Active', joined: '2025', email: 'anushka.s@spirecrest.in',
      bio: 'Coordinating project milestones and team deliverables.',
      password: 'anus'
    },
    'ekta': {
      name: 'Ekta', role: 'Customer Support', image: 'assets/img/team/ppekta.jpg',
      id: 'SSPL-SUP-001', status: 'Active', joined: '2025', email: 'ekta.g@spirecrest.in',
      bio: 'Handling customer queries and ensuring satisfaction.',
      password: 'ekta'
    },
    'vaibhavi': {
      name: 'Vaibhavi', role: 'Team Member', image: 'assets/img/team/ppvaibhavi.jpg',
      id: 'SSPL-TM-001', status: 'Active', joined: '2025', email: 'vaibhavi.d@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.',
      password: 'vaib'
    },
    'saloni': {
      name: 'Saloni', role: 'Team Member', image: 'assets/img/team/ppsaloni.jpg',
      id: 'SSPL-TM-002', status: 'Active', joined: '2025', email: 'saloni.o@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.',
      password: 'salo'
    },
    'shivani': {
      name: 'Shivani', role: 'Team Member', image: 'assets/img/team/ppshivani.jpg',
      id: 'SSPL-TM-003', status: 'Active', joined: '2025', email: 'shivani.b@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.',
      password: 'shiv'
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the ID from the URL (e.g., 'aum')
    this.memberId = this.route.snapshot.paramMap.get('id');
    
    // Normalize logic for Srishti (CRGO) vs Shristi (Growth) to handle URL overlaps if needed
    // But for now, just load the data directly:
    if (this.teamData[this.memberId]) {
      this.currentMember = this.teamData[this.memberId];
    }
  }

  unlockProfile() {
    // Check if the entered password matches the current member's specific password
    if (this.currentMember && this.passwordInput === this.currentMember.password) {
      this.isUnlocked = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Incorrect Password. Access Denied. Administrator Notified!';
    }
  }
}