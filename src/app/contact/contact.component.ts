import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivateComponent{
  name: string = '';
  email: string = '';
  message: string = '';

  canExit(){
    if(this.name || this.email || this.message){
      return confirm('You have unsaved changes. Do you really want to discard these changes?')
    } else {
      return true;
    }
  }

}
