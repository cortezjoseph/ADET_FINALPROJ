import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foresttea',
  templateUrl: './foresttea.page.html',
  styleUrls: ['./foresttea.page.scss'],
})
export class ForestteaPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
