import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public searchItem3 : string=""
  public sn: any;

  constructor(private ds:DataService) {}

  ngOnInit(): void {
    this.filteredItems3()
  }

  filteredItems3(){
    this.sn = this.ds.filterItems3(this.searchItem3);
  }

  

}
