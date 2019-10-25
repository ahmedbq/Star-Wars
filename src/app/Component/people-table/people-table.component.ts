import { Component, OnInit, ViewChild, Input } from '@angular/core';
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

  constructor() { }

  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender'];

  @Input() peopleData = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.peopleData.paginator = this.paginator;
    this.peopleData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.peopleData.filter = filterValue.trim().toLowerCase();
  }

}
