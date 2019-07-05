import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      ),
      transition('normal <=> airbourne', [
        animate('0.7s ease')
      ])
    ]),

    trigger('squeeze', [
      state('normal', style([])),
      state('squeeze',
        style({
          height: '50px'
        })
      ),
      transition('* => *', [
        animate('0.5s ease')
      ])
    ])
  ]
})
export class AppComponent {
  flying = false;
  squeezing = false;

  up() {
    this.flying = !this.flying;
  }

  squeeze() {
    this.squeezing = !this.squeezing;
  }
}
