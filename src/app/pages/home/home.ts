import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../projects/projects';
import { Team } from '../team/team';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Projects, Team],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
