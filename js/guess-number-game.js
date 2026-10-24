function user_input(e) {
    e.preventDefault()

    let user_Number = document.getElementById("user-Number")
    let com_num = document.getElementById("com_num")
    let user_num = document.getElementById("user_num")
    let message = document.getElementById("message")
    
    let computer_num = Math.floor(Math.random() * 10) + 1

    message.innerHTML = ""

    if (!user_Number.value) {
        message.style.color = "red"
        message.innerHTML = "Enter Number"
    } else if (Number(user_Number.value) === computer_num) {
        message.style.color = "Green"
        message.innerHTML = "Congratulations You Win"
        com_num.innerHTML = computer_num
        user_num.innerHTML = user_Number.value
    } else {
        message.style.color = "red"
        message.innerHTML = "Better Luck Next Time"
        com_num.innerHTML = computer_num
        user_num.innerHTML = user_Number.value
    }
}

function input_focus() {
    let user_Number_label = document.getElementById("user-Number-label")
    user_Number_label.style.top = "0"
    user_Number_label.style.opacity = "1"
}

function input_blur() {
    let user_Number_label = document.getElementById("user-Number-label")
    let user_Number = document.getElementById("user-Number")

    if (!user_Number.value) {
        user_Number_label.style.top = "16px"
        user_Number_label.style.opacity = "0.6"
    }
}