import { Component, OnInit } from '@angular/core';
import { UploadPic } from 'src/app/models/picture';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  pictures: UploadPic [];

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.getAllPictures().subscribe((data) => {
      this.pictures = data;
    })
  }

}
