import { Component, OnInit } from '@angular/core';
// Events (iOS only)
window.addEventListener('statusTap', function () {
  console.log("statusbar tapped");
});
//API
import {
  Plugins,
  StatusBarStyle,
} from '@capacitor/core';
const { StatusBar } = Plugins;

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isStatusBarLight = true

  changeStatusBar() {
    StatusBar.setStyle({
      style: this.isStatusBarLight ? StatusBarStyle.Dark : StatusBarStyle.Light
    }).then(()=>{
      this.isStatusBarLight = !this.isStatusBarLight;
    });
  }

  hideStatusBar() {
    StatusBar.hide();
  }

  showStatusBar() {
    StatusBar.show();
  }

}


