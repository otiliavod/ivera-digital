import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { SiteContentService } from '../../data/site-content.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, ChipModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Team {
  private readonly content = inject(SiteContentService);
  team = this.content.getTeamSection();

  open(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
