import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PeopleService {
  allPeopleUrl = 'https://swapi.co/api/people/?format=json';

  constructor(private http: HttpClient) {}

  getAllPeople() {
    return this.http.get(this.allPeopleUrl);
  }
}
