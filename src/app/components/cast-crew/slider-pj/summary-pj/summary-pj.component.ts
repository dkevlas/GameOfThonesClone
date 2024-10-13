import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-pj',
  templateUrl: './summary-pj.component.html',
  styleUrl: './summary-pj.component.scss'
})
export class SummaryPjComponent {
  @Input()
  title: string = ''

  @Input()
  paragraph: string = ''

  @Input()
  bgImage: string = ''

  @Input()
  altCharacter: string = ''
}
