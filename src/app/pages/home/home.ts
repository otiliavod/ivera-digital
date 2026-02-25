import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import {Navigation} from '../../components/navigation/navigation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Navigation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
