import { Component} from '@angular/core';
import { footerInfo } from '../../data/footer-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  dataFooter = footerInfo

}
