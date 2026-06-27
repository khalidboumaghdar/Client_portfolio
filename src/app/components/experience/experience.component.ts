import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = EXPERIENCES;
  expanded = new Set<number>([0]);

  toggle(i: number) {
    if (this.expanded.has(i)) {
      this.expanded.delete(i);
    } else {
      this.expanded.add(i);
    }
  }

  isOpen(i: number) {
    return this.expanded.has(i);
  }
}
