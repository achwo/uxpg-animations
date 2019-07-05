import { Component } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

@Component({
  selector: 'uxpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('airbourne', [
      state('normal', style({})),
      state(
        'airbourne',
        style({
          transform: 'translateY(-200%)'
        })
      )
    ])
  ]
})
export class AppComponent {
  flying = false;

  up() {
    this.flying = !this.flying;
  }
}
