import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'company', 'city','actions'];
  filteredUsers: any[] = []; 
  pagedUsers: any[] = [];
  pageSize = 5;
  currentPage = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
    (data) => {
      this.users = data;
      this.filteredUsers = [...this.users]; 
      this.updatePagedUsers();             
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
    this.filteredUsers = [...this.users];     
    this.updatePagedUsers();                  
    alert('User deleted successfully.');
  }
}


 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(filterValue) ||
      user.email.toLowerCase().includes(filterValue) ||
      user.id.toString().includes(filterValue)
    );
    this.currentPage = 0;
    this.updatePagedUsers();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedUsers();
  }

  updatePagedUsers() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedUsers = this.filteredUsers.slice(start, end);
  }


}
