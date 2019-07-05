import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  sequence,
  group
} from '@angular/animations';

@Component({
  selector: 'uxpg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('jump', [
      state('normal', style([])),
      state(
        'airbourne',
        style({
          transform: 'translateY(-200%)',
          height: '110px'
        })
      ),
      transition('normal => airbourne', [
        sequence([
          animate('0.6s ease', style({
            height: '50px',
            transform: 'translateY(calc(-100%))'
          })),
          group([
            animate('0.5s ease', style({
              transform: 'translateY(-180%)'
            })),
            animate('0.2s ease', style({
              height: '120px'
            })),
          ]),
          animate('0.2s')
        ])
      ])
    ])
  ]
})
export class AppComponent {
  jumping = false;

  jump() {
    this.jumping = !this.jumping;
  }
}
