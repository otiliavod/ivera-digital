import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
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
  private readonly cdr = inject(ChangeDetectorRef);

  navItems: NavItem[] = this.content.getNavItems();

  logoWordmarkPath = 'assets/brand/ivera_logo_2_asset.png';
  logoMarkPath = 'assets/brand/ivera_logo_3_asset.png';

  @ViewChild('mobileMenu') mobileMenu?: Popover;

  scrolled = false;

  activeSection: NavItem['path'] = '';

  @HostListener('window:scroll')
  onScroll(): void {
    const next = window.scrollY > 8;
    if (next !== this.scrolled) {
      this.scrolled = next;
      this.cdr.markForCheck();
    }

    this.updateActiveSection();
  }

  onDesktopNavClick(ev: Event, path: NavItem['path']): void {
    ev.preventDefault();
    void this.navigate(path);
  }

  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (!el) return;

    // offset for fixed nav (uses --nav-height if present)
    const navHeightVar =
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '84px';
    const navHeight = parseInt(navHeightVar, 10) || 84;

    const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  async navigate(path: NavItem['path']): Promise<void> {
    this.mobileMenu?.hide();

    // Home
    if (path === '') {
      this.scrollToTop();
      this.activeSection = '';
      this.cdr.markForCheck();
      return;
    }

    if (path === 'contact' || path === 'projects' || path === 'team') {
      // Ensure the section exists (Home renders it). If not yet in DOM, retry next tick.
      const el = document.getElementById(path);
      if (!el) {
        setTimeout(() => this.scrollToId(path), 0);
      } else {
        this.scrollToId(path);
      }

      this.activeSection = path;
      this.cdr.markForCheck();
      return;
    }

    this.scrollToTop();
  }

  openMobileMenu(event: Event): void {
    this.mobileMenu?.toggle(event);
  }

  private updateActiveSection(): void {
    const navHeightVar =
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '84px';
    const navHeight = parseInt(navHeightVar, 10) || 84;

    const pos = window.scrollY + navHeight + 40;

    const projects = document.getElementById('projects');
    if (!projects || pos < projects.offsetTop) {
      if (this.activeSection !== '') {
        this.activeSection = '';
        this.cdr.markForCheck();
      }
      return;
    }

    let current: NavItem['path'] = 'projects';

    const team = document.getElementById('team');
    if (team && pos >= team.offsetTop) current = 'team';

    const contact = document.getElementById('contact');
    if (contact && pos >= contact.offsetTop) current = 'contact';

    if (current !== this.activeSection) {
      this.activeSection = current;
      this.cdr.markForCheck();
    }
  }
}
