import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {
  public user: any;
  public userInput: any;
  public userObject: any;
  public storageKeys: any;

  constructor() { }

  ngOnInit() {
    this.getItem();
    this.getObject();
    this.keys();
  }

  // JSON "set" example
  async setObject() {
    console.log(this.userInput);
    await Storage.set({
      key: 'userObject',
      value: JSON.stringify({
        id: 1,
        name: this.userInput
      })
    });
  }

  // JSON "get" example
  async getObject() {
  //  this.user = JSON.parse(await Storage.get({ key: 'userObject' }));
    this.userObject = JSON.stringify(await Storage.get({ key: 'userObject' }));
    console.log(this.userObject);
  }

  async setItem() {
    await Storage.set({
      key: 'name',
      value: this.userInput
    });
  }

  async getItem() {
    this.user = (await Storage.get({ key: 'name' })).value;
    console.log(this.user);
  }

  async removeItem() {
    await Storage.remove({ key: 'name' });
    this.getItem();
  }

  async keys() {
    this.storageKeys = JSON.stringify(await Storage.keys());
  }

  async clear() {
    await Storage.clear();
  }

  reload() {
    window.location.reload()
  }

}
