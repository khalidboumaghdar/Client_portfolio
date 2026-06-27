import { Component } from '@angular/core';
import { SKILL_GROUPS, CERTIFICATIONS, LANGUAGES } from '../../data/portfolio-data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  groups = SKILL_GROUPS;
  certifications = CERTIFICATIONS;
  languages = LANGUAGES;
}
