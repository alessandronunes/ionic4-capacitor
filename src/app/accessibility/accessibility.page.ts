import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Accessibility, Modals } = Plugins;

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss'],
})
export class AccessibilityPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
      alert('accessibilityScreenReaderStateChange: ' + state.value);
    });
  }
  
  async isVoiceOverEnabled() {
    var vo = await Accessibility.isScreenReaderEnabled();
    alert('Voice over enabled? ' + vo.value);
  }
  
  async speak() {
    var value = await Modals.prompt({
      title: "Value to speak",
      message: "Enter the value to speak"
    });
  
    Accessibility.speak({value: value.value});
  }

}



