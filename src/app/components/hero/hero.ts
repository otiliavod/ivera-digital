import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SiteContentService } from '../../data/site-content.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, ButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly content = inject(SiteContentService);

  hero = this.content.getHeroContent();
}
