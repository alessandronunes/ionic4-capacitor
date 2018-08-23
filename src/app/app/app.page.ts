import { Component, OnInit } from '@angular/core';
import { Plugins, AppState } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor() { }

  ngOnInit() {

    App.addListener('appStateChange', (state: AppState) => {
      // state.isActive contains the active state
      console.log('App state changed. Is active?', state.isActive);
    });

    // Listen for serious plugin errors
    // App.addListener('pluginError', (info: any) => {
    //   console.error('There was a serious error with a plugin', info);
    // });

    console.log(App);

    // let ret = await App.canOpenUrl({ url: 'com.getcapacitor.myapp' });
    // console.log('Can open url: ', ret.value);

    // let ret2 = await App.openUrl({ url: 'com.getcapacitor.myapp://page?id=ionicframework' });
    // console.log('Open url response: ', ret2);

    // let ret3 = await App.getLaunchUrl();
    // if(ret3 && ret3.url) {
    //   console.log('App opened with URL: ' + ret3.url);
    // }
    // console.log('Launch url: ', ret3);

    // App.addListener('appUrlOpen', (data: any) => {
    //   console.log('App opened with URL: ' +  data.url);
    // });

    // App.addListener('appRestoredResult', (data: any) => {
    //   console.log('Restored state:', data);
    // });
  }

}
