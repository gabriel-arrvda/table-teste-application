import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-teste-application';

  bodyData = [
    {
      "name": "John Doe",
      "jobTitle": "Software Engineer",
      "age": 30,
      "salary": 75000
    },
    {
      "name": "Jane Smith",
      "jobTitle": "Data Scientist",
      "age": 28,
      "salary": 80000
    },
    {
      "name": "Michael Johnson",
      "jobTitle": "Product Manager",
      "age": 35,
      "salary": 90000
    },
    {
      "name": "Emily Brown",
      "jobTitle": "UX Designer",
      "age": 27,
      "salary": 70000
    }
  ];
}
