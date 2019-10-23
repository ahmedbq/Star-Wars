import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PeopleService } from '../../Service/people.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


/**
 * @title Table grabbing people information.
 */
@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }

  key = 'results';
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(res => this.dataSource.data = res[this.key]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
