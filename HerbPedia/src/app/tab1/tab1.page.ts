import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public searchItem : string=""
  public items: any;
  
  darkmode: boolean

  constructor(private ds:DataService) {

    const prefersDark = window.matchMedia('prefers-color-scheme: dark');
    this.darkmode = prefersDark.matches
  }

  darkenable(){
    this.darkmode = !this.darkmode;
    document.body.classList.toggle('dark');

  }

  ngOnInit(): void {
    this.filteredItems()
  }

  filteredItems(){
    this.items = this.ds.filterItems(this.searchItem);
  }

  


}
