import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async showToast() {
    await Toast.show({
      text: 'This is your Toast!',
      duration: 'long'
    });
  }

}