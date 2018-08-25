import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show() {
    // Show the splash for an indefinite amount of time:
    SplashScreen.show({
      autoHide: false
    });
    this.hide();

    setTimeout(this.hide, 2000);
  }

  hide() {
    // Hide the splash (you should do this on app launch)
    SplashScreen.hide({
      fadeOutDuration: 1000
    });
  }

  showDuration() {
    // Show the splash for two seconds and then auto hide:
    SplashScreen.show({
      showDuration: 5000,
      autoHide: true,
      fadeInDuration: 1000,
      fadeOutDuration: 1000
    });
  }
}
