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
      state(
        'normal',
        style({
          transform: 'translateY(-100%)',
          height: '100px'
        })
      ),
      state(
        'airbourne',
        style({
          transform: 'translateY(-200%)',
          height: '110px'
        })
      ),
      transition('normal => airbourne', [
        sequence([
          animate(
            '0.6s ease',
            style({
              height: '50px'
            })
          ),
          group([
            animate(
              '0.5s ease-out',
              style({
                transform: 'translateY(-180%)'
              })
            ),
            animate(
              '0.2s ease',
              style({
                height: '120px'
              })
            )
          ]),
          animate('0.2s')
        ])
      ]),
      transition('void => normal', []),
      transition('airbourne => normal', [
        sequence([
          animate('0.2s', style({
            transform: 'translateY(-200%)',
            height: '110px'
          })),
          animate(
            '0.3s ease-in',
            style({
              height: '120px',
              transform: 'translateY(-180%)'
            })
          ),
          animate(
            '0.5s ease-in',
            style({
              transform: 'translateY(-100%)'
            })
          ),
          animate('0.2s ease-out', style({
            height: '80px'
          })),
          animate('1s ease')
        ])
      ])
    ])
  ]
})
export class AppComponent {
  jumping = false;

  jump() {
    this.jumping = true;
  }

  onJumpFinished(event) {
    console.log('jumping', this.jumping);
    console.log(event);
    this.jumping = false;
  }
}
