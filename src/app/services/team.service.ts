import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TeamMember {
  id: string;
  key: string;
  name: string;
  role: string;
  image: string;
  status: string;
  joined: string;
  email: string;
  bio: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  // DEFAULT DATA: Full Roster
  private defaultData: { [key: string]: TeamMember } = {
    
    // LEADERSHIP
    'aum': {
      key: 'aum', name: 'Aum', role: 'Founder', image: 'assets/img/team/ppaum.jpg',
      id: 'SSPL-EXEC-001', status: 'Active', joined: '2020', email: 'aum@spirecrest.in',
      bio: 'Visionary leader driving innovation and strategic growth for Spirecrest.', password: 'aum'
    },
    'deshesh': {
      key: 'deshesh', name: 'Deshesh', role: 'Director', image: 'assets/img/team/ppdeshesh.jpg',
      id: 'SSPL-EXEC-002', status: 'Active', joined: '2020', email: 'deshesh@spirecrest.in',
      bio: 'Overseeing operations and ensuring excellence in execution.', password: 'desh'
    },
    'saurabh': {
      key: 'saurabh', name: 'Er. Saurabh', role: 'Strategic Advisor', image: 'assets/img/team/ppsaurabh.jpg',
      id: 'SSPL-ADV-001', status: 'Active', joined: '2021', email: 'saurabh@spirecrest.in',
      bio: 'Guiding technical strategy and long-term business development goals.', password: 'saur'
    },
    'antara': {
      key: 'antara', name: 'Antara', role: 'COO', image: 'assets/img/team/ppantara.jpg',
      id: 'SSPL-OPS-001', status: 'Active', joined: '2021', email: 'antara@spirecrest.in',
      bio: 'Chief Operating Officer managing daily business operations.', password: 'antara'
    },

    // MANAGEMENT & OPERATIONS
    'laraib': {
      key: 'laraib', name: 'Ar. Laraib', role: 'Consulting Architect', image: 'assets/img/team/pplaraib.jpg',
      id: 'SSPL-CONS-001', status: 'Active', joined: '2022', email: 'laraib@spirecrest.in',
      bio: 'Leading the design and planning for our Interior & Architecture projects.', password: 'lara'
    },
    'anshuman': {
      key: 'anshuman', name: 'Er. Anshuman', role: 'Innovation Catalyst', image: 'assets/img/team/ppanshuman.jpg',
      id: 'SSPL-TECH-001', status: 'Active', joined: '2021', email: 'anshuman@spirecrest.in',
      bio: 'Driving technological innovation and R&D initiatives.', password: 'anshuman'
    },
    'rahul': {
      key: 'rahul', name: 'Prof. Rahul', role: 'Business Adviser', image: 'assets/img/team/pprahul.jpg',
      id: 'SSPL-ADV-002', status: 'Active', joined: '2020', email: 'rahul@spirecrest.in',
      bio: 'Providing expert guidance on business strategy and market expansion.', password: 'rahul'
    },
    'aakash': {
      key: 'aakash', name: 'Er. Aakash', role: 'External Consultant', image: 'assets/img/team/ppaakash.jpg',
      id: 'SSPL-CONS-002', status: 'Active', joined: '2022', email: 'aakash@spirecrest.in',
      bio: 'Consulting on specialized engineering projects.', password: 'aakash'
    },

    // PROJECT & HR
    'shashank': {
      key: 'shashank', name: 'Er. Shashank', role: 'Project Collaborator', image: 'assets/img/team/ppshashank.jpg',
      id: 'SSPL-PROJ-001', status: 'Active', joined: '2022', email: 'shashank@spirecrest.in',
      bio: 'Collaborating on key infrastructure and technical projects.', password: 'shashank'
    },
    'prachi': {
      key: 'prachi', name: 'Prachi', role: 'HRM', image: 'assets/img/team/ppprachi.jpg',
      id: 'SSPL-HR-001', status: 'Active', joined: '2023', email: 'prachi@spirecrest.in',
      bio: 'Managing Human Resources and talent acquisition.', password: 'prachi'
    },
    'astha': {
      key: 'astha', name: 'Astha', role: 'Biz. Dev. Exe.', image: 'assets/img/team/ppastha.jpg',
      id: 'SSPL-BD-001', status: 'Active', joined: '2023', email: 'astha@spirecrest.in',
      bio: 'Driving business development and client relationships.', password: 'astha'
    },
    'shristi': {
      key: 'shristi', name: 'Shristi', role: 'Growth Facilitator', image: 'assets/img/team/ppshristi.jpg',
      id: 'SSPL-BD-002', status: 'Active', joined: '2023', email: 'shristi@spirecrest.in',
      bio: 'Facilitating company growth strategies and outreach.', password: 'shristi'
    },

    // DEVELOPMENT & SUPPORT
    'sanchita': {
      key: 'sanchita', name: 'Sanchita', role: 'Dev Coordinator', image: 'assets/img/team/ppsanchita.jpg',
      id: 'SSPL-DEV-001', status: 'Active', joined: '2023', email: 'sanchita@spirecrest.in',
      bio: 'Coordinating development timelines and software deliverables.', password: 'sanchita'
    },
    'kavya': {
      key: 'kavya', name: 'Kavya', role: 'DS/AIML', image: 'assets/img/team/ppkavya.jpg',
      id: 'SSPL-DEV-002', status: 'Active', joined: '2023', email: 'kavya@spirecrest.in',
      bio: 'Specialist in Data Science and AI/ML solutions.', password: 'kavya'
    },
    'janvi': {
      key: 'janvi', name: 'Janvi', role: 'Business Operations', image: 'assets/img/team/ppjanvi.jpg',
      id: 'SSPL-OPS-002', status: 'Active', joined: '2023', email: 'janvi@spirecrest.in',
      bio: 'Ensuring smooth daily business and administrative operations.', password: 'janvi'
    },
    'isha': {
      key: 'isha', name: 'Isha', role: 'Market Advisor', image: 'assets/img/team/ppisha.jpg',
      id: 'SSPL-MKT-001', status: 'Active', joined: '2023', email: 'isha@spirecrest.in',
      bio: 'Advising on market trends and consumer behavior.', password: 'isha'
    },

    // SUPPORT & TEAM
    'srishti_crgo': {
      key: 'srishti_crgo', name: 'Srishti', role: 'CRGO', image: 'assets/img/team/ppsrishti.jpg',
      id: 'SSPL-OPS-003', status: 'Active', joined: '2023', email: 'srishti.crgo@spirecrest.in',
      bio: 'Chief Revenue Growth Officer.', password: 'srishti'
    },
    'anushka': {
      key: 'anushka', name: 'Anushka', role: 'Project Co-ord.', image: 'assets/img/team/ppanushka.jpg',
      id: 'SSPL-PROJ-002', status: 'Active', joined: '2023', email: 'anushka@spirecrest.in',
      bio: 'Coordinating project milestones and team deliverables.', password: 'anushka'
    },
    'ekta': {
      key: 'ekta', name: 'Ekta', role: 'Customer Support', image: 'assets/img/team/ppekta.jpg',
      id: 'SSPL-SUP-001', status: 'Active', joined: '2023', email: 'ekta@spirecrest.in',
      bio: 'Handling customer queries and ensuring satisfaction.', password: 'ekta'
    },
    'vaibhavi': {
      key: 'vaibhavi', name: 'Vaibhavi', role: 'Team Member', image: 'assets/img/team/ppvaibhavi.jpg',
      id: 'SSPL-TM-001', status: 'Active', joined: '2023', email: 'vaibhavi@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.', password: 'vaibhavi'
    },
    'saloni': {
      key: 'saloni', name: 'Saloni', role: 'Team Member', image: 'assets/img/team/ppsaloni.jpg',
      id: 'SSPL-TM-002', status: 'Active', joined: '2023', email: 'saloni@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.', password: 'saloni'
    },
    'shivani': {
      key: 'shivani', name: 'Shivani', role: 'Team Member', image: 'assets/img/team/ppshivani.jpg',
      id: 'SSPL-TM-003', status: 'Active', joined: '2023', email: 'shivani@spirecrest.in',
      bio: 'Dedicated team member contributing to core projects.', password: 'shivani'
    }
  };

  private teamSubject = new BehaviorSubject<any>(this.loadData());
  team$ = this.teamSubject.asObservable();

  constructor() { }

  private loadData() {
    const saved = localStorage.getItem('spirecrestTeamData');
    return saved ? JSON.parse(saved) : this.defaultData;
  }

  getMember(key: string) {
    const data = this.teamSubject.value;
    return data[key];
  }

  getAllMembers() {
    return Object.values(this.teamSubject.value);
  }

  updateMember(key: string, updates: Partial<TeamMember>) {
    const currentData = this.teamSubject.value;
    if (currentData[key]) {
      currentData[key] = { ...currentData[key], ...updates };
      localStorage.setItem('spirecrestTeamData', JSON.stringify(currentData));
      this.teamSubject.next(currentData);
    }
  }

  resetToDefaults() {
    localStorage.removeItem('spirecrestTeamData');
    this.teamSubject.next(this.defaultData);
  }
}