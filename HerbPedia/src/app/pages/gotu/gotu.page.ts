import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gotu',
  templateUrl: './gotu.page.html',
  styleUrls: ['./gotu.page.scss'],
})
export class GotuPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
