import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';

import { SiteContentService } from '../../data/site-content.service';
import { NavItem } from '../../data/site-content.models';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, ButtonModule, Popover],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
  private readonly content = inject(SiteContentService);
  private readonly router = inject(Router);

  navItems: NavItem[] = this.content.getNavItems();

  logoWordmarkPath = 'assets/brand/ivera_logo_2_asset.png';
  logoMarkPath = 'assets/brand/ivera_logo_3_asset.png';

  @ViewChild('mobileMenu') mobileMenu?: Popover;

  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8; // threshold
  }

  async navigate(path: NavItem['path']): Promise<void> {
    this.mobileMenu?.hide();
    await this.router.navigate(path ? ['/', path] : ['/']);
  }

  openMobileMenu(event: Event): void {
    this.mobileMenu?.toggle(event);
  }
}
