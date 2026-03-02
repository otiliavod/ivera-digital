import { ChangeDetectionStrategy, Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom, catchError, of, timeout } from 'rxjs';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

import { SiteContentService } from '../../data/site-content.service';

type Status = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly content = inject(SiteContentService);
  private readonly http = inject(HttpClient);
  private readonly cdr = inject(ChangeDetectorRef);

  contact = this.content.getContactSection();

  model = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  sending = false;
  status: Status = 'idle';

  async submit(): Promise<void> {
    if (this.sending) return;

    this.sending = true;
    this.status = 'idle';
    this.cdr.markForCheck();

    try {
      const url = '/.netlify/functions/contact';

      await firstValueFrom(
        this.http
          .post(
            url,
            this.model,
            { headers: { 'Content-Type': 'application/json' } }
          )
          .pipe(timeout(15000))
      );

      this.status = 'success';
      this.model = { name: '', email: '', company: '', message: '' };

    } catch {
      this.status = 'error';
    } finally {
      this.sending = false;
      this.cdr.markForCheck();
    }
  }
}
