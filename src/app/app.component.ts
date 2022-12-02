import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  dark_mode: boolean = false;
  dark: string ="bg-[url('src/assets/background1.jpg')] dark";
  light: string ="bg-[url('src/assets/background1.jpg')] light";

  switchDark() {
    this.dark_mode = !this.dark_mode;
  }

}
