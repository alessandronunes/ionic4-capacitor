import { Component, OnInit } from '@angular/core';
import { Plugins, HapticsImpactStyle } from '@capacitor/core';

const { Haptics } = Plugins;

@Component({
  selector: 'app-haptics',
  templateUrl: './haptics.page.html',
  styleUrls: ['./haptics.page.scss'],
})
export class HapticsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hapticsImpact(style = HapticsImpactStyle.Heavy) {
    Haptics.impact({
      style: style
    });
  }

  hapticsImpactMedium(style = HapticsImpactStyle.Medium) {
    Haptics.impact({
      style: style
    });
  }

  hapticsImpactLight(style = HapticsImpactStyle.Light) {
    Haptics.impact({
      style: style
    });
  }

  hapticsVibrate() {
    Haptics.vibrate();
  }

  hapticsSelectionStart() {
    Haptics.selectionStart();
  }

  hapticsSelectionChanged() {
    Haptics.selectionChanged();
  }

  hapticsSelectionEnd() {
    Haptics.selectionEnd();
  }

}
