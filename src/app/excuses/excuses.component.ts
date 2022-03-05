import { Component, OnInit } from '@angular/core';
import { Excuses } from '../excuses';
import { ExcusesService } from '../excuses.service';

@Component({
  selector: 'app-excuses',
  templateUrl: './excuses.component.html',
  styleUrls: ['./excuses.component.css']
})
export class ExcusesComponent implements OnInit {

  constructor(private excusesServices: ExcusesService) { }

  categories:string[] = [];
  excuses: Excuses[] = [];
  excuseNo: number = 0;

  ngOnInit(): void {
    this.excusesServices.getExcuseCategories().subscribe(data => {
      this.categories = data;
    });
  }

  clickCategory(event: any){
    let id = event.currentTarget.id;
    this.excusesServices.generateExcuses(id, this.excuseNo).subscribe((data:Excuses[])  => {
      this.excuses = data;
    });
  }

}
