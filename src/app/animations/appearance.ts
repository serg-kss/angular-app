import { animate, state, style, transition, trigger } from '@angular/animations';

export let appearance = trigger('appearance',[
   state('void', style({opacity: 0})),
   transition('void => *', [
     animate(2000)
   ])
 ])