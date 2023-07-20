import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public searchItem2 : string=""
  public con: any;
  


  constructor(private ds:DataService) {

  }

  ngOnInit(): void {
    this.filteredItems2()
  }

  filteredItems2(){
    this.con = this.ds.filterItems2(this.searchItem2);
  }

  


}
