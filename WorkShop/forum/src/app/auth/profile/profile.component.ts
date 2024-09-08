import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../core/user.service';
import { IUser } from '../../core/interfaces';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  isInEditMode = false;
  currentUser!: IUser;

  @ViewChild('editProfileForm') editProfileForm!: NgForm;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile$()
      .subscribe({
        next: user => this.currentUser = user,
        error: error => {
          console.error(error);
          this.router.navigate(['/login']);
        }
      })
  }

  enterEditMode() {
    this.isInEditMode = true;

    setTimeout(() => {
      this.editProfileForm.form.patchValue({
        username: this.currentUser.username,
        email: this.currentUser.email,
        'select-tel': this.currentUser.tel && this.currentUser.tel.length > 4
          ? this.currentUser.tel.substring(0, 4)
          : '',
        tel: this.currentUser.tel && this.currentUser.tel.length > 4
          ? this.currentUser.tel.substring(5)
          : this.currentUser.tel,
      })
    })
  }

  updateProfile() {
    console.log(this.editProfileForm.value)
    this.isInEditMode = false;
  }
}
