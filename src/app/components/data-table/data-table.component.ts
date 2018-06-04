import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableDataSource;

  displayedColumns = ['postId', 'id', 'name', 'email', 'body'];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this._dataService, this.paginator, this.sort);
  }
}
