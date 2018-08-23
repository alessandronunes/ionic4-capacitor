import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Accessibility',
      url: '/accessibility',
      icon: 'add'
    },
    {
      title: 'App',
      url: '/app',
      icon: 'information'
    },
    {
      title: 'Background Task',
      url: '/backgroundtask',
      icon: 'eye-off'
    },
    {
      title: 'Browser',
      url: '/browser',
      icon: 'browsers'
    },
    {
      title: 'Camera',
      url: '/camera',
      icon: 'camera'
    },
    {
      title: 'Clipboard',
      url: '/clipboard',
      icon: 'clipboard'
    },
    {
      title: 'Console',
      url: '/console',
      icon: 'code'
    },
    {
      title: 'Device',
      url: '/device',
      icon: 'phone-portrait'
    },
    {
      title: 'Filesystem',
      url: '/filesystem',
      icon: 'folder'
    },
    {
      title: 'Geolocation',
      url: '/geolocation',
      icon: 'pin'
    },
    {
      title: 'Haptics',
      url: '/haptics',
      icon: 'hand'
    },
    {
      title: 'Keyboard',
      url: '/keyboard',
      icon: 'keypad'
    },
    {
      title: 'Modals',
      url: '/modals',
      icon: 'today'
    },
    {
      title: 'Motion',
      url: '/motion',
      icon: 'move'
    },
    {
      title: 'Network',
      url: '/network',
      icon: 'wifi'
    },
    {
      title: 'Share',
      url: '/share',
      icon: 'share'
    },
    {
      title: 'Splash Screen',
      url: '/splashscreen',
      icon: 'photos'
    },
    {
      title: 'Status Bar',
      url: '/statusbar',
      icon: 'remove'
    },
    {
      title: 'Storage',
      url: '/storage',
      icon: 'disc'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'alert'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
