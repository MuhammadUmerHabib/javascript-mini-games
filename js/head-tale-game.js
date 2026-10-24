function flipcoin () {
    let coin = document.getElementById("coin");
    let num = Math.floor(Math.random() * 2) + 1

    let checkclass = coin.classList.contains("coinflip")

    if (checkclass) {
        coin.classList.remove("coinflip")
    }

    setTimeout(() => {
        coin.classList.add("coinflip")
    }, 100);

    setTimeout(() => {
        if (num <= 1) {
            coin.innerHTML = "Heads"
        } else if (num > 1) {
            coin.innerHTML = "Tails"
        }
    }, 600)
}


