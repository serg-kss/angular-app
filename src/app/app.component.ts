
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
ngOnInit(): void {
  this.result()
}

department = [100,1,2,3,10,77]


maxNumber: number =0 ;


result(){

  for(let i = 0; i<this.department.length; i++){
    //let number
  
    if (this.maxNumber < this.department[i]){
      this.maxNumber = this.department[i];
  }
}

}


}
