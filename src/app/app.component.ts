import { Component } from '@angular/core';
import {AppService} from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private AppService :  AppService){ }

   async ngOnInit(){
   var response=  await this.AppService.getMessages();
    // console.log(response.json());
    this.messages= response.json();
  }
  messages=[{mmmm:"sdas"},{ssda:"sadsd"}]
  title = 'Antika';
}
