import { Component } from '@angular/core';
import { PROFILE, METRICS } from '../../data/portfolio-data';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  profile = PROFILE;
  metrics = METRICS;

  weeklyBars = [38, 52, 41, 67, 58, 73, 64];
}
