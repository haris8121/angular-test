import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  };

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Alice',
        data: [20, 30, 40, 25, 35],
        fill: false,
        borderColor: '#0d6efd',
        tension: 0.4
      },
      {
        label: 'Bob',
        data: [25, 35, 45, 40, 50],
        fill: false,
        borderColor: '#198754',
        tension: 0.4
      }
    ]
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { enabled: true }
    },
    scales: {
      x: {},
      y: { beginAtZero: true }
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data) => {
        this.users = data.map((user, index) => ({
          ...user,
          sales: this.getRandomSales(index)
        }));

        this.prepareChartData();
      },
      (error) => {
        console.error('Failed to fetch user data', error);
      }
    );
  }

  getRandomSales(index: number): number {
    const dummySales = [150, 200, 120, 180, 90, 210, 175, 160, 130, 140];
    return dummySales[index % dummySales.length];
  }

  prepareChartData(): void {
    this.barChartData = {
      labels: this.users.map(user => user.name),
      datasets: [
        {
          label: 'Total Sales',
          data: this.users.map(user => user.sales),
          backgroundColor: '#0d6efd'
        }
      ]
    };
  }
}
