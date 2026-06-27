import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  profile = PROFILE;
  open = false;

  links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }
}
