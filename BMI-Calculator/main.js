const form = document.querySelector("form")

//  THIS USECASE WILL GIVE YOU EMPTY VALUE

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const message = document.querySelector("#message")

    const BMI = (weight / ((height * height)/10000)).toFixed(2)

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    } else {
        results.innerHTML = `Your BMI is ${BMI}`
    }

    if (BMI < 18.6) {
        message.innerHTML = `Your BMI is ${BMI} and You are Under Weight`
    } else if (18.6 < BMI < 24.9) {
        message.innerHTML = `Congratulations!,  Your BMI is ${BMI} and You are Normal Weight`
    } else if (BMI > 24.9) {
        message.innerHTML = `Oooh!, Your BMI is ${BMI} and You are Over Weight`
    }

} )

