import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ExcusesService } from '../excuses.service';
import { MyExcuses, Stats } from '../excuses';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-my-excuses',
  templateUrl: './my-excuses.component.html',
  styleUrls: ['./my-excuses.component.css']
})
export class MyExcusesComponent implements AfterViewInit {

  constructor(private excusesServices: ExcusesService) { }

  myExcuses: MyExcuses[] = [];
  stats: Stats[] = [];

  displayedColumns: string[] = ['date_created', 'time_created', 'excuse_category', 'excuse'];
  dataSource = new MatTableDataSource<MyExcuses>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.excusesServices.getUserExcuses().subscribe((data:MyExcuses[])  => {
      this.dataSource = new MatTableDataSource<MyExcuses>(data);
      this.dataSource.paginator = this.paginator;
    });

    this.excusesServices.getExcuseStats().subscribe((data:Stats[])  => {
      console.log(data);
      this.stats = data;
    });
  }

}
