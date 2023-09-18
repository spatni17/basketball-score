homeEl = document.getElementById("home")
guestEl = document.getElementById("guest")
countH = 0
countG = 0

function homeOne() {
    countH += 1
    homeEl.textContent = countH
}

function homeTwo() {
    countH += 2
    homeEl.textContent = countH
}

function homeThree() {
    countH += 3
    homeEl.textContent = countH
}

function guestOne() {
    countG += 1
    guestEl.textContent = countG
}

function guestTwo() {
    countG += 2
    guestEl.textContent = countG
}

function guestThree() {
    countG += 3
    guestEl.textContent = countG
}