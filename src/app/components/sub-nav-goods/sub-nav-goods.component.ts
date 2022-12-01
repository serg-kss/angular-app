import { Component, OnInit } from '@angular/core';
import { links_classes } from 'src/app/data/styles-data';

@Component({
  selector: 'app-sub-nav-goods',
  templateUrl: './sub-nav-goods.component.html',
  styleUrls: ['./sub-nav-goods.component.css']
})
export class SubNavGoodsComponent implements OnInit {

  links: string[] = ['IProdusts', 'Ifood', 'ICars']
  routes: string[] = ['/goods', '/food', '/cars']
  links_classes: string = links_classes;

  constructor() { }

  ngOnInit(): void {
  }



}
