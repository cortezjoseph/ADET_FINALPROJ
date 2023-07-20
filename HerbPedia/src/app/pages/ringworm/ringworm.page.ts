import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ringworm',
  templateUrl: './ringworm.page.html',
  styleUrls: ['./ringworm.page.scss'],
})
export class RingwormPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}

