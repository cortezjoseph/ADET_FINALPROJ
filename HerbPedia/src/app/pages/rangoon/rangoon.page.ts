import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rangoon',
  templateUrl: './rangoon.page.html',
  styleUrls: ['./rangoon.page.scss'],
})
export class RangoonPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
