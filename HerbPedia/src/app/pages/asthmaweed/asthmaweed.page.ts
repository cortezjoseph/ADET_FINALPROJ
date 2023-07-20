import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asthmaweed',
  templateUrl: './asthmaweed.page.html',
  styleUrls: ['./asthmaweed.page.scss'],
})
export class AsthmaweedPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
