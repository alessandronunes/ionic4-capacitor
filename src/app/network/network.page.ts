import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  public handler: any;
  public networkStatus: any;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.handler = Network.addListener('networkStatusChange', async (status) => {
      console.log('networkStatus', status); 
      this.networkStatus = JSON.stringify(status);
      this.cd.detectChanges();
    });
  }

  async status(){
    // if (this.handler){
    //   this.handler.remove();
    // }
    // Get the current network status
    this.networkStatus = JSON.stringify(await Network.getStatus());
  }

}
