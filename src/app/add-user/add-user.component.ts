// add-user.component.ts

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/UserService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private router: Router, private userService: UserService) {}

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      const user = userForm.value;
      this.userService.addUser(user).subscribe(
        (response) => {
          console.log('User added successfully:', response);
          this.router.navigate(['/user/listuser']);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  }
}
