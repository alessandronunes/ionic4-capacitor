import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  public error: string = '';

  constructor() { }

  ngOnInit() {
    
  }

  share(){
    if (navigator.hasOwnProperty('share')) {
    let shareRet = Share.share({
        title: 'See cool stuff',
        text: 'Really awesome thing you need to see right meow',
        url: 'http://ionicframework.com/',
        dialogTitle: 'Share with buddies'
      });
    }else{
      this.error = 'Web Share API not available';
    }
  }

}
