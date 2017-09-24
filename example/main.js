var form = document.querySelector('.Form')
var button = form.querySelector('button')
var inputs = [].slice.call(form.querySelectorAll('input'))
var output = document.querySelector('.Result')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  var target = event.target
  var wordA = target.wordA.value
  var wordB = target.wordB.value

  var distance = window.hamming(wordA, wordB)

  if (distance !== null) {
    output.innerHTML = 'hamming distance: <strong>' + distance + '</strong>'
  } else {
    output.innerHTML = 'hamming distance: -'
  }
})

inputs.forEach(function(input) {
  input.addEventListener('keyup', function(event) {
    button.click()
  })
})
