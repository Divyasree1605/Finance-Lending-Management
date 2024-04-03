import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent  {

  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    // Implement password validation logic here
    if (this.validatePasswords() && this.validateFields()) {
      // Navigate to home page
      this.router.navigate(['/home']);
    }
  }

  close() {
    // Navigate to home page
    this.router.navigate(['/home']);
  }

  validatePasswords(): boolean {
    // Password validation logic
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\da-zA-Z]).{8,}$/;
    return passwordRegex.test(this.newPassword) && this.newPassword === this.confirmPassword;
  }

  validateFields(): boolean {
    // Check if any field is blank
    return this.currentPassword.trim() !== '' && this.newPassword.trim() !== '' && this.confirmPassword.trim() !== '';
  }
}


