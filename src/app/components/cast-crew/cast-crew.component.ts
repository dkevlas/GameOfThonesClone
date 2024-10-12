import { Component } from '@angular/core';
import { Character, characters } from './characters';
@Component({
  selector: 'app-cast-crew',
  templateUrl: './cast-crew.component.html',
  styleUrl: './cast-crew.component.scss'
})
export class CastCrewComponent {
  data: Character[] = characters
}
