import {formatCurrency} from "../../scripts/utils/money.js";

console.log('test suite: formatCurrency'); 

console.log('converts cents to dollars');
if (formatCurrency(2095) === "20.95") {
  console.log("Test passed");
}else{
  console.log("Test failed");
}
console.log('works with 0')
if (formatCurrency(0) === "0.00") {
  console.log("Test passed");
}else{
  console.log("Test failed");
}
console.log('rounds up  to the nearest cent');
if (formatCurrency(2000.4) === "20.00") {
  console.log("Test passed");
}else{
  console.log("Test failed");
}