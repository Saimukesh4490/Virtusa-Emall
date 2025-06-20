import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        <form>
          <label for="role">Login As</label>
          <select id="role" [(ngModel)]="role" name="role">
            <option value="">-- Select Role --</option>
            <option value="marketing">Marketing Staff</option>
            <option value="owner">Space Owner</option>
          </select>

          <label for="username">Username</label>
          <input type="text" id="username" [(ngModel)]="username" name="username" placeholder="Enter username" />

          <label for="password">Password</label>
          <input type="password" id="password" [(ngModel)]="password" name="password" placeholder="Enter password" />

          <button type="button" (click)="login()">Login</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(to right, #e6f0ff, #f8faff);
      padding: 1rem;
    }

    .login-card {
      background: #ffffff;
      padding: 2.5rem 2rem;
      border-radius: 12px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
      width: 100%;
      max-width: 360px;
      animation: fadeIn 0.5s ease-in-out;
    }

    h2 {
      margin-bottom: 0.5rem;
      text-align: center;
      color: #333;
    }

    p {
      margin-bottom: 1.5rem;
      text-align: center;
      font-size: 14px;
      color: #777;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-top: 0.8rem;
      font-size: 14px;
      color: #444;
    }

    input, select {
      padding: 0.6rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 14px;
      margin-top: 0.2rem;
      transition: all 0.2s ease;
    }

    input:focus, select:focus {
      border-color: #5a9bf6;
      outline: none;
      box-shadow: 0 0 0 2px rgba(90, 155, 246, 0.2);
    }

    button {
      margin-top: 1.8rem;
      padding: 0.7rem;
      background-color: #5a9bf6;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #407ee0;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 420px) {
      .login-card {
        padding: 2rem 1.5rem;
      }
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  role = ''; // marketing or owner

  constructor(private router: Router) {}

  login() {
    if (!this.role || !this.username || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    if (this.username === 'admin' && this.password === 'admin') {
      if (this.role === 'marketing') {
        this.router.navigate(['/dashboard']);
      } else if (this.role === 'owner') {
        this.router.navigate(['/owner']);
      }
    } else {
      alert('Invalid username or password');
    }
  }
}
