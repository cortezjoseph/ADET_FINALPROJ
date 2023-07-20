import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jutemallow',
  templateUrl: './jutemallow.page.html',
  styleUrls: ['./jutemallow.page.scss'],
})
export class JutemallowPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
