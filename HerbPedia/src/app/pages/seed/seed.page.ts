import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.page.html',
  styleUrls: ['./seed.page.scss'],
})
export class SeedPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
