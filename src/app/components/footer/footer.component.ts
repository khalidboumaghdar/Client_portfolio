import { Component } from '@angular/core';
import { PROFILE } from '../../data/portfolio-data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}
