import { LimitPipe } from "./limit.pipe"


describe('LimitPipe', () => {
   let cutTxt = new LimitPipe()
 
   it('doesn\'t transform "Hello, World!"', () => {
     expect(cutTxt.transform('Hello, World!', 60)).toBe(
       'Hello, World!'
     )
   })
 
   it('transforms "Hello, World!" to "Hello..."', () => {
     expect(cutTxt.transform('Hello, World!', 5)).toBe(
       'Hello...'
     )
   })
 })