import { Component } from '@angular/core';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
  moduleId: module.id,
  selector: 'bc-typeahead-app',
  templateUrl: 'bc-typeahead.component.html',
  directives: [MdCheckbox],
  styleUrls: ['bc-typeahead.component.css']
})
export class BcTypeaheadAppComponent {
  title = 'bc-typeahead works!';
}
