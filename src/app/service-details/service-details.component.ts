import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  serviceId: string;
  currentService: any;

  // --- SERVICE DATABASE ---
  serviceData = {
    'surveillance': {
      title: 'Advanced Surveillance Systems',
      icon: 'business_badge',
      description: 'We provide state-of-the-art security solutions designed to protect assets and ensure safety for businesses and homes.',
      features: [
        'CCTV & IP Camera Systems',
        'Biometric Access Control',
        'Face Recognition Attendance',
        'X-Ray Baggage Scanners',
        'Walkie Talkies & Metal Detectors'
      ],
      img: 'assets/img/bg11.jpg' 
    },
    'automation': {
      title: 'Smart Home & Office Automation',
      icon: 'tech_mobile',
      description: 'Transform your environment with cutting-edge automation that offers convenience, energy efficiency, and luxury.',
      features: [
        'Retro & Touch Smart Switches',
        'Motorized Curtain Tracks',
        'Automatic Pet Feeders',
        'Smart Plant Drip Irrigation',
        'Voice Control Integration (Alexa/Google)'
      ],
      img: 'assets/img/bg3.jpg'
    },
    'software': {
      title: 'Web, App & Software Design',
      icon: 'design_app',
      description: 'Our digital wing crafts bespoke digital experiences, ranging from responsive websites to complex enterprise software.',
      features: [
        'Custom Website Development',
        'Mobile App Development (iOS/Android)',
        'ERP & CRM Software',
        'UI/UX Design',
        'Maintenance & Support'
      ],
      img: 'assets/img/bg4.jpg'
    },
    'consulting': {
      title: 'IT Consulting & Business Solutions',
      icon: 'business_briefcase-24',
      description: 'Strategic guidance to help organizations navigate the digital landscape and optimize their technology infrastructure.',
      features: [
        'System Integration Strategy',
        'Digital Transformation',
        'Operational Optimization',
        'Risk Management',
        'Scalability Planning'
      ],
      img: 'assets/img/bg5.jpg'
    },
    'interior': {
      title: 'Interior & Architecture',
      icon: 'design_palette',
      description: 'Holistic design solutions that blend functionality with aesthetics for residential and commercial spaces.',
      features: [
        'Full Interior Design Planning',
        'Architectural Layouts',
        '3D Rendering & Visualization',
        'Space Optimization',
        'Project Management'
      ],
      img: 'assets/img/bg6.jpg'
    },
    'network': {
      title: 'Networking & Cloud Solutions',
      icon: 'tech_laptop',
      description: 'Robust infrastructure services ensuring seamless connectivity, data storage, and processing power.',
      features: [
        'Enterprise Networking Setup',
        'Data Center & Server Installation',
        'Cloud Migration Services',
        'Machine Learning & AI Integration',
        'IoT Ecosystems'
      ],
      img: 'assets/img/bg7.jpg'
    },
    'computer': {
      title: 'Computer & Laptop Solutions',
      icon: 'tech_controller-modern',
      description: 'Comprehensive hardware support for commercial and residential clients, ensuring zero downtime.',
      features: [
        'Desktop & Laptop Sales',
        'Hardware Repair & Upgrades',
        'Software Troubleshooting',
        'Custom PC Builds',
        'Annual Maintenance Contracts (AMC)'
      ],
      img: 'assets/img/bg8.jpg'
    },
    'solar': {
      title: 'Solar Power Systems',
      icon: 'objects_planet',
      description: 'Sustainable energy solutions customized to reduce carbon footprints and electricity costs.',
      features: [
        'On-Grid Solar Systems',
        'Off-Grid Solutions with Battery',
        'Hybrid Solar Setups',
        'Industrial Solar Planning',
        'Maintenance & Cleaning'
      ],
      img: 'assets/img/bg1.jpg'
    },
    'studio': {
      title: 'Audio Visual & Studio Setups',
      icon: 'media-2_note-03',
      description: 'Professional grade AV installations for entertainment, corporate, and creative purposes.',
      features: [
        'Hi-Fi Audio Systems',
        'Immersive Home Theatres',
        'Podcast & YouTube Studios',
        'Acoustic Treatment',
        'Video Conferencing Rooms'
      ],
      img: 'assets/img/bg3.jpg'
    },
    'marketing': {
      title: 'Digital Marketing & Branding',
      icon: 'business_bulb-63',
      description: 'Data-driven marketing strategies to amplify your brand voice and maximize ROI.',
      features: [
        'Social Media Management',
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Content Strategy',
        'Brand Identity Design'
      ],
      img: 'assets/img/bg4.jpg'
    }
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // FIX: Use .subscribe() instead of .snapshot
    // This forces the data to update whenever the URL parameter 'id' changes
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      
      // Update content immediately
      if (this.serviceData[this.serviceId]) {
        this.currentService = this.serviceData[this.serviceId];
        
        // Optional: Scroll to top smoothly when content changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}