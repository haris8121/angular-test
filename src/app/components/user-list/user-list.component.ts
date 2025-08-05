import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'company', 'city','actions'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to fetch user list', error);
      }
    );
  }


deleteUser(userId: number): void {
  const confirmDelete = confirm('Are you sure you want to delete this user?');
  if (confirmDelete) {
    this.users = this.users.filter(user => user.id !== userId);
    alert('User deleted successfully.');
  }
}


}
