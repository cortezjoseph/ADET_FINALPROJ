import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mangosteen',
  templateUrl: './mangosteen.page.html',
  styleUrls: ['./mangosteen.page.scss'],
})
export class MangosteenPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }

}
