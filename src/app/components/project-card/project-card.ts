import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { ProjectItem } from '../../data/site-content.models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, ButtonModule, ChipModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  @Input({ required: true }) project!: ProjectItem;

  openLive(): void {
    window.open(this.project.liveUrl, '_blank', 'noopener,noreferrer');
  }
}
