import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private backendUrl = 'https://ssplbackend.vercel.app';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  loading = false;
  message: string | null = null;
  isError = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    this.message = null;
    this.isError = false;

    this.http.post<any>(`${this.backendUrl}/api/contact`, this.formData).subscribe({
      next: (response) => {
        this.message = response.message;
        this.isError = false;
        this.formData = { name: '', email: '', subject: '', message: '' };
        this.loading = false;
      },
      error: (error) => {
        console.error('Error:', error);
        this.message = 'Failed to send. Please try again.';
        this.isError = true;
        this.loading = false;
      }
    });
  }
}