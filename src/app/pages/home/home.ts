import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Projects } from '../projects/projects';
import { Team } from '../team/team';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Projects, Team, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
