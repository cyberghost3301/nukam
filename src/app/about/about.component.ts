import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('about-us');
    
    const navbar = document.getElementsByTagName('nav')[0];
    if (navbar) {
      navbar.classList.add('navbar-transparent');
    }
  }
  
  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('about-us');
    
    const navbar = document.getElementsByTagName('nav')[0];
    if (navbar) {
      navbar.classList.remove('navbar-transparent');
    }
  }
}