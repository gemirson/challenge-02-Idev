const sub = require('./src/js/tabuada-subtracao')
const multiply = require('./src/js/tabuada-multiplicacao')
const divider = require('./src/js/tabuada-divisao')

let base = 7;
let currentIndex = 0;

function main() {

  console.log("Subtract operator")
  console.log('[Subtract:]', sub(base, currentIndex))

  console.log("Multiply operator",)
  console.log('[Subtract:]', multiply(base, currentIndex))

  currentIndex = 1
  console.log("Multiply operator",)
  console.log('[Subtract:]', divider(base, currentIndex))

}

main()