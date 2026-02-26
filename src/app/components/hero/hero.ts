import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
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
  private readonly router = inject(Router);

  hero = this.content.getHeroContent();

  private scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  async scrollTo(id: 'contact' | 'projects'): Promise<void> {
    if (this.router.url !== '/') {
      await this.router.navigate(['/']);
      setTimeout(() => this.scrollToId(id), 0);
      return;
    }

    this.scrollToId(id);
  }
}
