import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-turmeric',
  templateUrl: './turmeric.page.html',
  styleUrls: ['./turmeric.page.scss'],
})
export class TurmericPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
