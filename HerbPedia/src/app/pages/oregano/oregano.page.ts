import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-oregano',
  templateUrl: './oregano.page.html',
  styleUrls: ['./oregano.page.scss'],
})
export class OreganoPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
