import { Component, OnInit } from '@angular/core';
//import { PeopleService } from '././Service/people.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  //https://thesixbees.com/2016/06/27/10-inspiring-examples-of-complex-ui/
  // getAllPeople() {
  //   this.PeopleService.getAllPeople().subscribe(
  //     https://www.metaltoad.com/blog/angular-5-making-api-calls-httpclient-service
  //   );
  // }

}
