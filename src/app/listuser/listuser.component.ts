import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService.service';
import { User } from '../Models/User.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit{
user: any;
admin: any;
users!: User[];
  constructor(private router: Router,private userService: UserService) {}



  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.retrieveAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
    deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully.');
        // Rechargez la liste des utilisateurs après la suppression.
        this.loadUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  editUser(userId: number) {
    // Naviguer vers la page de modification en utilisant le routeur
    this.router.navigate(['/updateuser', userId]);
  }
  viewQRCode(userId: number) {
    this.router.navigate(['/user', userId, 'qr-code']);
  }
  generatePDF(userId: number): void {
    // Implement your logic to generate PDF using the UserService
    this.userService.generatePDF(userId).subscribe(
      (response: any) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Error generating PDF:', error);
      }
    );
  }
}
