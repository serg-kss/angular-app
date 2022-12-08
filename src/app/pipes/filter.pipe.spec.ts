import { products } from '../data/products';
import { IProduct } from './../models/product';
import { FilterPipe } from "./filter.pipe"


describe('FilterPipe', () => {

   let filter = new FilterPipe()
   let test_array: IProduct [] = products;
   
   it('empty searching', () => {
     expect(filter.transform(test_array, '')).toBe(test_array)
   })
 
   it('filter array', () => {
     expect(filter.transform(test_array, 'f')).toEqual(test_array)
   })

   it('no matching', () => {
      expect(filter.transform(test_array, 'hh')).toEqual([])
    })

 })