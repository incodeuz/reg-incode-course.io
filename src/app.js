const bot = new Bot("6048875588:AAEGebgWHn8p0_Sw95FEFQ9rb911px-JetU", 1167233264)
const inputs = document.querySelectorAll(".input")
const form = document.querySelector("form")
const success = document.querySelector("[success]")
const error = document.querySelector("[error]")

form.addEventListener("submit", (e) => {
    let answers = {}
    e.preventDefault()
    inputs.forEach(input => {
        answers[input.name] = input.value
    })

    let message = `
        Name: *${answers.first_name}*            Familiya: *${answers.last_name}*            Email: *${answers.email}*            Phone: *+${answers.phone_number}*            Rozimisiz: *${answers.rozimi}*            Message: *${answers.message}*
    `
    bot.sendMessage(message, null, "markdown")
        .then(res => {
            success.style.display = "block"
            setTimeout(() => {
                success.style.display = "none"
            }, 5000);
        })
        .catch(err => {
            error.style.display = "block"
            setTimeout(() => {
                error.style.display = "none"
            }, 5000);
        })
})


