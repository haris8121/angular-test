import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;
  successMessage = '';
    loading : boolean =false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['', Validators.required], 
      company: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const user = this.userForm.value;
    console.log(user, "this is form");

    this.http.post('https://jsonplaceholder.typicode.com/users', user).subscribe(
      (response) => {
        console.log('User created:', response);
        this.successMessage = 'User created successfully!';
        this.userForm.reset();
        this.loading = false;
      },
      (error) => {
        console.error('Error creating user:', error);
        this.loading = false;
      }
    );
  }
}
