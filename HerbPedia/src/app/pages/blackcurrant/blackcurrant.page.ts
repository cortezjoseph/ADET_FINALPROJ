import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blackcurrant',
  templateUrl: './blackcurrant.page.html',
  styleUrls: ['./blackcurrant.page.scss'],
})
export class BlackcurrantPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
