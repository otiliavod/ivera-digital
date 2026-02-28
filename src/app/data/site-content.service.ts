import { Injectable } from '@angular/core';
import { HERO_CONTENT, NAV_ITEMS, PROJECTS_SECTION, TEAM_SECTION, CONTACT_SECTION, FOOTER_CONTENT } from './site-content';
import { HeroContent, NavItem, ProjectsSectionContent, TeamSectionContent, ContactSectionContent, FooterContent } from './site-content.models';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  getNavItems(): NavItem[] {
    return NAV_ITEMS;
  }

  getHeroContent(): HeroContent {
    return HERO_CONTENT;
  }

  getProjectsSection(): ProjectsSectionContent {
    return PROJECTS_SECTION;
  }

  getTeamSection(): TeamSectionContent {
    return TEAM_SECTION;
  }

  getContactSection(): ContactSectionContent {
    return CONTACT_SECTION;
  }

  getFooterContent(): FooterContent {
    return FOOTER_CONTENT;
  }
}
