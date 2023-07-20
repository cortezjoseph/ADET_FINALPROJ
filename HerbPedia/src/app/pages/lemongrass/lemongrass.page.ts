import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lemongrass',
  templateUrl: './lemongrass.page.html',
  styleUrls: ['./lemongrass.page.scss'],
})
export class LemongrassPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
