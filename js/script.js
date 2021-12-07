const input = document.querySelector('#input')
const result = document.querySelector('#result')

let expression = ''

// handle all clicks together on the document
document.addEventListener('click', (e) => {
  // if the id is "clear" then wipe the expression
  if (e.target.id === 'clear') {
    expression = ''
    input.innerText = expression
    return
  }
    
  // if the clicked element parent is in a ".numbers" element
  if (e.target.parentElement.classList.contains('numbers')) {
    // innerText is the text inside the element that is clicked
    expression += e.target.innerText
    // update the text that shows on screen
    input.innerText = expression
  }

  // if the clicked element parent is in a ".operators" element
  if (e.target.parentElement.classList.contains('operators')) {
    // if the last character is an operator remove it so that the new operator will replace it
    const lastChar = expression[expression.length - 1]
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
      expression = expression.slice(0, expression.length - 1)
    }
    // add the operator to the expression
    expression += e.target.innerText
    input.innerText = expression
  }
})

result.addEventListener('click', () => {
  // can't perform calculations if the last character is an operator so we remove it
  const lastChar = expression[expression.length - 1]
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    expression = expression.slice(0, expression.length - 1)
  }

  // calculate the expression from the expression string
  expression = eval(expression)
  
  // set the result to the total
  input.innerText = expression
})