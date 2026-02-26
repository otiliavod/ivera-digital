import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Popover, PopoverModule } from 'primeng/popover';

import { SiteContentService } from '../../data/site-content.service';
import { NavItem } from '../../data/site-content.models';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, ButtonModule, PopoverModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
  private readonly content = inject(SiteContentService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);

  navItems: NavItem[] = this.content.getNavItems();

  logoWordmarkPath = 'assets/brand/ivera_logo_2_asset.png';
  logoMarkPath = 'assets/brand/ivera_logo_3_asset.png';

  @ViewChild('mobileMenu') mobileMenu?: Popover;

  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    const next = window.scrollY > 8;
    if (next !== this.scrolled) {
      this.scrolled = next;
      this.cdr.markForCheck();
    }
  }

  private scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;

    // offset for fixed nav
    const y = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  async navigate(path: NavItem['path']): Promise<void> {
    this.mobileMenu?.hide();

    // Scroll targets
    if (path === 'contact' || path === 'projects' || path === 'team') {
      // If not on home, go home first
      if (this.router.url !== '/') {
        await this.router.navigate(['/']);
        // wait a tick for DOM to render
        setTimeout(() => this.scrollToId(path), 0);
        return;
      }

      this.scrollToId(path);
      return;
    }

    await this.router.navigate(path ? ['/', path] : ['/']);
  }

  openMobileMenu(event: Event): void {
    this.mobileMenu?.toggle(event);
  }
}
