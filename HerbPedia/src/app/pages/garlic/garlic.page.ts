import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-garlic',
  templateUrl: './garlic.page.html',
  styleUrls: ['./garlic.page.scss'],
})
export class GarlicPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
