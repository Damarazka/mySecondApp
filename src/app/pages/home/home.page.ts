import { Component, OnInit } from '@angular/core';
import { ActionSheet,ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public actionSheedCntrl : ActionSheetController) { }

  async presentActionButton() {
    const actionSheed = await this.actionSheedCntrl.create({
      header : 'Tvan Clean',
      buttons : [
        {
          text:'delete',
          icon:'trash',
          role:'destructive',
          handler() {
            console.log('this delete button has clicked')
          },
        },
        {
          text:'play',
          icon:'play',
          handler() {
            console.log('this play button has clicked')
          },
        },
        {
          text:'share',
          icon:'share',
          handler() {
            console.log('this share button has clicked')
          },
        },
        {
          text:'cancel',
          icon:'close',
          role:'cancel',
          handler() {
            console.log('this cancel button has clicked')
          },
        },
      ],
      cssClass: 'custom-css',
      animated:true,
      backdropDismiss:true,
      keyboardClose:false,
      mode: 'md'
    })

    actionSheed.present()

    actionSheed.onWillDismiss().then(()=>{
      console.log('action seed mau ditutup')
    })

    actionSheed.onDidDismiss().then(()=>{
      console.log('action seed sudah ditutup')
    })

  }
  ngOnInit() {
  }

}
