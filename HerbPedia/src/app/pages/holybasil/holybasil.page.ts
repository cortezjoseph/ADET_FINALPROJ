import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-holybasil',
  templateUrl: './holybasil.page.html',
  styleUrls: ['./holybasil.page.scss'],
})
export class HolybasilPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
