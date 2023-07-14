# aigbojie-discount is a package that helps to calculate discount of price by and it is easy to use.

# installation
 
 using npm :
 npm i aigbojie-discount

# usage in reactjs

import {useDiscount} from "aigbojie-discount";


export defualt function App(){
    // it takes two arguements the first is the PRICE the second is the percentage discount
  const discount=useDiscount(300,20);
  console.log(discount)

  return(
    <div>{discount}</div>
  )

}