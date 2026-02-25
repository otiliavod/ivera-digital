import { Injectable } from '@angular/core';
import { HERO_CONTENT, NAV_ITEMS, PROJECTS_SECTION, TEAM_SECTION } from './site-content';
import { HeroContent, NavItem, ProjectsSectionContent, TeamSectionContent } from './site-content.models';

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
}
