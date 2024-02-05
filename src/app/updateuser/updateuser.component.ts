import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/UserService.service';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nomUser: ['', Validators.required],
      prenomUser: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
      role: ['', Validators.required],
    });

    const userId = this.route.snapshot.paramMap.get('id');

    if (userId !== null) {
      this.userService.getUserById(userId).subscribe((user) => {
        this.userForm.patchValue({
          nomUser: user.nomUser,
          prenomUser: user.prenomUser,
          email: user.email,
          role: user.role,
        });
      });
    }
  }

  onSubmit() {
    const updatedUser = this.userForm.value;
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId !== null) {
      this.userService.updateUser(userId, updatedUser).subscribe((user) => {
        console.log('Utilisateur mis à jour avec succès', user);
        // Ajoutez une redirection ou d'autres actions nécessaires après la mise à jour
        this.router.navigate(['/user/listuser']);
      });
    }
  }
}
