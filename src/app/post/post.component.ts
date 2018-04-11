import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {DataTableModule} from "angular2-datatable";
import { DataFilterPipe } from './../pipes/data-filter.pipe';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";

  constructor(private _http: Http, private filtro:DataFilterPipe) { }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((data)=> {
          console.log(data.json());
              this.data = data.json();
                });
  }


}
