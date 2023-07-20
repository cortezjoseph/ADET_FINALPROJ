import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fiveleaved',
  templateUrl: './fiveleaved.page.html',
  styleUrls: ['./fiveleaved.page.scss'],
})
export class FiveleavedPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
