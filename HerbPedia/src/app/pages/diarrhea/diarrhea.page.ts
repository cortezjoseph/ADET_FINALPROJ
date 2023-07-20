import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diarrhea',
  templateUrl: './diarrhea.page.html',
  styleUrls: ['./diarrhea.page.scss'],
})
export class DiarrheaPage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  Back(){
    this.navCtrl.back();

  }
}
