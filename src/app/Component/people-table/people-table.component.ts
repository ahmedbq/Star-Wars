import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../Service/people.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  people: any = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.peopleService.getAllPeople().subscribe(res => this.people = res['results']);
  }

}
