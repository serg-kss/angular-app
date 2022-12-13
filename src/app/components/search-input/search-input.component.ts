import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() searching:string = "";
  @Output() searchingChange = new EventEmitter<string>();

  onSearchingChange(s: string){         
    this.searching = s;
    this.searchingChange.emit(s);  
  }

}
