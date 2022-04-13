// const sum = [2, 1, 4, 9, 7].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum);
//

class ArrayOperations{
  static getSum(arr){
    return.reduce((prevSum, el) => prevSum + el);
  }
  static getMax (arr){
    return arr.reduce((prevMax, el) => (el>prevMax)?el:prevMax)
    return Math.max(...arr)
  }
  static getEvenCount (arr){
    return arr.reduce(
      (prevCount, x) => (x % 2 === 0 ? prevCount + 1 : prevCount )
    )
  }
  static multAll4
}
