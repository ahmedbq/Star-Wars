import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/Service/people.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  key = 'results';
  people = new MatTableDataSource();

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(res => this.people.data = res[this.key]);
  }

}
