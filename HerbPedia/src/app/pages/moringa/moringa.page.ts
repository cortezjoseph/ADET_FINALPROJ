import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-moringa',
  templateUrl: './moringa.page.html',
  styleUrls: ['./moringa.page.scss'],
})
export class MoringaPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }


}
