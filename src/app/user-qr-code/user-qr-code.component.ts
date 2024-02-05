// user-qr-code.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/UserService.service';


@Component({
  selector: 'app-user-qr-code',
  templateUrl: './user-qr-code.component.html',
  styleUrls: ['./user-qr-code.component.css']
})
export class UserQRCodeComponent implements OnInit {
  userId!: number;
  qrCodeImage: any; // Change the type based on the actual data type of your QR code image

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = +params['id'];

      // Fetch the QR code image from the backend
      this.userService.getQRCode(this.userId).subscribe(
        data => {
          // Assuming your backend returns an image in Blob format
          this.qrCodeImage = URL.createObjectURL(data);
        },
        error => {
          console.error('Error fetching QR code:', error);
        }
      );
    });
  }

}

