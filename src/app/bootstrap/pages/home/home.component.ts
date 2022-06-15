import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      age: 30,
      country: 'USA'
    },
    {
      id: 2,
      name: 'Peter', 
      lastname: 'Smith',
      age: 25,
      country: 'USA'
    },
    {
      id: 3,
      name: 'Amy', 
      lastname: 'Jones',
      age: 23,
      country: 'USA'
    },
    {
      id: 4,
      name: 'Hannah',
      lastname: 'Williams',
      age: 22,
      country: 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
