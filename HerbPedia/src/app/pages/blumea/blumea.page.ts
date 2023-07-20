import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blumea',
  templateUrl: './blumea.page.html',
  styleUrls: ['./blumea.page.scss'],
})
export class BlumeaPage implements OnInit {

  

  constructor(public navCtrl:NavController) { 

  }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
