const placeForResults = document.getElementById("results")
console.log ('placeForResults:', placeForResults)
console.log ('window.location.search:', window.location.search)

new URLSearchParams(window.location.search).forEach((value, name) => {
  console.log('value, name:', {value, name})
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})

const buttonElement = document.querySelector('button')
const submitForm = () => {
    console.log('Submit Button Clicked')
}

const nameBox = document.querySelector('#nameBox')

const emailBox = document.querySelector('#emailBox')

const textArea = document.querySelector('#messageBox')

const yes = document.querySelector('#yes')

const no = document.querySelector('#no')

const classmate = document.querySelector('#refferal1')

const resume = document.querySelector('#refferal2')

const linkedIn = document.querySelector('#refferal3')

const academyRec = document.querySelector('#refferal4')

const resultsSection = document.getElementById('results')