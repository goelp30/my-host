import { Component, inject, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-host');
  testService = inject(TestService);

  text = signal('Loading users...');

   ngOnInit() {
    this.testService.fetchTestFromBff().subscribe({
      next: (result) => {
        this.text.set(result);
      },
      error: (err) => {
        console.error(err); 
        this.text.set('Error loading users');
      },
    });
  }

}
