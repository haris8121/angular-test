import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  loading : boolean =false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`).subscribe(
      (data) => {
        this.user = data;
        this.loading = false;
      },
      (error) => {
        console.error('Failed to fetch user details', error);
        this.loading = false;
      }
    );
  }
}
