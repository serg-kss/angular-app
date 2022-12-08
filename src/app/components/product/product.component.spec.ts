import { LimitPipe } from './../../pipes/limit.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductIdService } from 'src/app/services/product-id.service';
import { ProductComponent } from './product.component';


describe('ProductComponent', ()=> {
  
   let fixture: ComponentFixture<ProductComponent>;
   let component: ProductComponent;
   

   let mockRepository = {
    productId: 0,
    setProductId: function(id: any) {this.productId = id;}
   }

   beforeEach(()=>{
      TestBed.configureTestingModule({
         declarations: [ProductComponent, LimitPipe],
         providers: [
          {provide: ProductIdService, useValue: mockRepository}
         ]
      })
     
      fixture = TestBed.createComponent(ProductComponent);
      component = fixture.componentInstance;
      
   });

   it('is defined',()=>{
      expect(component).toBeDefined();
   });

   /*it('should be null', () => {
      const infoMessageEl: HTMLElement = fixture.nativeElement
      const h3 = infoMessageEl.querySelector('h3')
      expect(h3)
    })*/

})