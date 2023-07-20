import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-coleus',
  templateUrl: './coleus.page.html',
  styleUrls: ['./coleus.page.scss'],
})
export class ColeusPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }


}
