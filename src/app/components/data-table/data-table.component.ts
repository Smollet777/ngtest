import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DataService } from '../../services/data.service';
import { Comment } from '../../models/comment.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Comment>;
  error: string;
  displayedColumns = ['postId', 'id', 'name', 'email', 'body'];

  constructor(private _dataService: DataService) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this._dataService.getComments()
      .subscribe(result => {
        this.dataSource = new MatTableDataSource<Comment>(result);
        this.dataSource.sort = this.sort;
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.dataSource.paginator = this.paginator;
      },
        error => this.error = error);
  }
}
