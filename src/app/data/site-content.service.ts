import { Injectable } from '@angular/core';
import { HERO_CONTENT, NAV_ITEMS } from './site-content';
import { HeroContent, NavItem } from './site-content.models';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  getNavItems(): NavItem[] {
    return NAV_ITEMS;
  }

  getHeroContent(): HeroContent {
    return HERO_CONTENT;
  }
}
