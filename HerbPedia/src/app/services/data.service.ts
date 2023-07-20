import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any[];
  public con: any[];
  public sn: any[];
  constructor() { 
    this.items = [
      {name: "Asthma Weed", image: "../assets/images/asthmaweed.png", page: "asthmaweed"},
      {name: "Bitter Gourd", image: "../assets/images/bitter.png", page: "bittergourd"},
      {name: "Black Currant Tree", image: "../assets/images/black1.png", page: "blackcurrant"},
      {name: "Blumea Camphor", image: "../assets/images/blumea.png", page: "blumea"},
      {name: "Cat's Whiskers", image: "../assets/images/cats.png", page: "cats"},
      {name: "Five-leaved Chaste", image: "../assets/images/five.png", page: "fiveleaved"},
      {name: "Forest Tea", image: "../assets/images/forest.png", page: "foresttea"},
      {name: "Garlic", image: "../assets/images/garlic.png", page: "garlic"},
      {name: "Ginger", image: "../assets/images/ginger.png", page: "ginger"},
      {name: "Gotu-Kola", image: "../assets/images/gotu.png", page: "gotu"},
      {name: "Guava", image: "../assets/images/guava.png", page: "guava"},
      {name: "Holy Basil", image: "../assets/images/holy.png", page: "holybasil"},
      {name: "Jute Mallow", image: "../assets/images/jute.png", page: "jutemallow"},
      {name: "King-of-Bitters", image: "../assets/images/king.png", page: "king"},
      {name: "Lemongrass", image: "../assets/images/lemongrass.png", page: "lemongrass"},
      {name: "Mangosteen", image: "../assets/images/mangosteen.png", page: "mangosteen"},
      {name: "Mint", image: "../assets/images/mint.png", page: "mint"},
      {name: "Moringa", image: "../assets/images/moringa.png", page: "moringa"},
      {name: "Oregano", image: "../assets/images/oregano.png", page: "oregano"},
      {name: "Painted Coleus", image: "../assets/images/painted.png", page: "coleus"},
      {name: "Queens Crape", image: "../assets/images/queen.png", page: "queen"},
      {name: "Rangoon Creeper", image: "../assets/images/rangoon.png", page: "rangoon"},
      {name: "Ringworm Bush", image: "../assets/images/ringworm.png", page: "ringworm"},
      {name: "Seed-under-leaf", image: "../assets/images/seed.png", page: "seed"},
      {name: "Silver Bush", image: "../assets/images/silver.png", page: "silver"},
      {name: "Sour Orange", image: "../assets/images/sour.png", page: "sour"},
      {name: "Turmeric", image: "../assets/images/turmeric.png", page: "turmeric"}
    ]
  this.con = [
    {name: "Cough, Colds, Fever", image: "../assets/images/fever.png", page: "cough"},
      {name: "Arthritis and Gout", image: "../assets/images/arthritis.png", page: "ag"},
      {name: "Diarrhea", image: "../assets/images/diarrhea.png", page: "diarrhea"},
      {name: "Skin Diseases & Wound Healing", image: "../assets/images/skin.png", page: "wound"},
      {name: "Other Uses", image: "../assets/images/others.png", page: "other"}
  ]
  this.sn = [
    {name: "Asthma Weed", image: "../assets/images/asthmaweed.png", season: "../assets/images/s1.png"},
      {name: "Bitter Gourd", image: "../assets/images/bitter.png", season: "../assets/images/s4.png"},
      {name: "Black Currant Tree", image: "../assets/images/black1.png", season: "../assets/images/s5.png"},
      {name: "Blumea Camphor", image: "../assets/images/blumea.png", season: "../assets/images/s2.png"},
      {name: "Cat's Whiskers", image: "../assets/images/cats.png", season: "../assets/images/s5.png"},
      {name: "Five-leaved Chaste", image: "../assets/images/five.png", season: "../assets/images/s1.png"},
      {name: "Forest Tea", image: "../assets/images/forest.png", season: "../assets/images/s2.png"},
      {name: "Garlic", image: "../assets/images/garlic.png", season: "../assets/images/s3.png"},
      {name: "Ginger", image: "../assets/images/ginger.png", season: "../assets/images/s2.png"},
      {name: "Gotu-Kola", image: "../assets/images/gotu.png", season: "../assets/images/s4.png"},
      {name: "Guava", image: "../assets/images/guava.png", season: "../assets/images/s3.png"},
      {name: "Holy Basil", image: "../assets/images/holy.png", season: "../assets/images/s1.png"},
      {name: "Jute Mallow", image: "../assets/images/jute.png", season: "../assets/images/s1.png"},
      {name: "King-of-Bitters", image: "../assets/images/king.png",season: "../assets/images/s5.png"},
      {name: "Lemongrass", image: "../assets/images/lemongrass.png",season: "../assets/images/s4.png"},
      {name: "Mangosteen", image: "../assets/images/mangosteen.png",season: "../assets/images/s3.png"},
      {name: "Mint", image: "../assets/images/mint.png", season: "../assets/images/s3.png"},
      {name: "Moringa", image: "../assets/images/moringa.png", season: "../assets/images/s2.png"},
      {name: "Oregano", image: "../assets/images/oregano.png", season: "../assets/images/s5.png"},
      {name: "Painted Coleus", image: "../assets/images/painted.png", season: "../assets/images/s3.png"},
      {name: "Queens Crape", image: "../assets/images/queen.png", season: "../assets/images/s4.png"},
      {name: "Rangoon Creeper", image: "../assets/images/rangoon.png", season: "../assets/images/s2.png"},
      {name: "Ringworm Bush", image: "../assets/images/ringworm.png", season: "../assets/images/s1.png"},
      {name: "Seed-under-leaf", image: "../assets/images/seed.png", season: "../assets/images/s3.png"},
      {name: "Silver Bush", image: "../assets/images/silver.png", season: "../assets/images/s2.png"},
      {name: "Sour Orange", image: "../assets/images/sour.png", season: "../assets/images/s4.png"},
      {name: "Turmeric", image: "../assets/images/turmeric.png", season: "../assets/images/s5.png"}

  ]
  }
  filterItems(searchItem: string){
    return  this.items.filter(item=>{
      return item.name.toLowerCase().indexOf(searchItem.toLowerCase()) > -1;
    });
  }
  filterItems2(searchItem2: string){
    return  this.con.filter(con=>{
      return con.name.toLowerCase().indexOf(searchItem2.toLowerCase()) > -1;
    });
  }
  filterItems3(searchItem3: string){
    return  this.sn.filter(sn=>{
      return sn.name.toLowerCase().indexOf(searchItem3.toLowerCase()) > -1;
    });
  }
}
