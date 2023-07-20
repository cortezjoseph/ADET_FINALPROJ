import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bittergourd',
  templateUrl: './bittergourd.page.html',
  styleUrls: ['./bittergourd.page.scss'],
})
export class BittergourdPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
