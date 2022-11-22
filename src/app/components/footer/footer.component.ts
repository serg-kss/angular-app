import { Component} from '@angular/core';
import { footerInfo } from '../../data/footer-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

  h2_classes: string = "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white";
  a_classes: string = "text-gray-500 hover:text-gray-900 dark:hover:text-white";
  svg_classes: string = "w-5 h-5"

  dataFooter = footerInfo


}
