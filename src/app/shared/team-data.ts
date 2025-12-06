export interface TeamMemberData {
  key: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TEAM_MEMBERS: TeamMemberData[] = [
  {
    key: 'aum',
    name: 'Aum',
    role: 'Executive Director',
    image: 'assets/img/team/ppaum.jpg',
    bio: 'Visionary leader driving innovation and strategic growth for Spirecrest.'
  },
  {
    key: 'deshesh',
    name: 'Deshesh',
    role: 'Managing Director',
    image: 'assets/img/team/ppdeshesh.jpg',
    bio: 'Overseeing operations and ensuring excellence in execution across all verticals.'
  },
  {
    key: 'saurabh',
    name: 'Er. Saurabh',
    role: 'Strategic Advisor',
    image: 'assets/img/team/ppsaurabh.jpg',
    bio: 'Guiding technical strategy and long-term business development goals.'
  },
  {
    key: 'antara',
    name: 'Antara',
    role: 'CMO',
    image: 'assets/img/team/ppantara.jpg',
    bio: 'Leading the team for our Marketing & Operational Initiatives.'
  }
];
