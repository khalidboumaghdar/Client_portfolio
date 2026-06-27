import { Component } from '@angular/core';
import { EDUCATION } from '../../data/portfolio-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  education = EDUCATION;
}
