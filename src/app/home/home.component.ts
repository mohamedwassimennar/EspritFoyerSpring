// home.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/UserService.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  roleStatistics: { [key: string]: number } = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserRoleStatistics();
  }

  getUserRoleStatistics(): void {
    this.userService.getUserRoleStatistics().subscribe(
      (statistics) => {
        this.roleStatistics = statistics;
      },
      (error) => {
        console.error('Error fetching role statistics:', error);
      }
    );
  }
}
