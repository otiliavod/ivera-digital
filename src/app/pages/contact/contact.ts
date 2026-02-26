import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { SiteContentService } from '../../data/site-content.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly content = inject(SiteContentService);
  contact = this.content.getContactSection();

  // UI-only for now (no backend yet)
  submit(): void {
    // later: hook to backend/email service
  }
}
