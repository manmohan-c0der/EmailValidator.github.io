let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "smmanmohan2000",
    "email": "smmanmohan2000@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked")
    resultcont.innerHTML = ` <div class="loading-container">
    <div class="loading-ring"></div>
</div>`
    let key = "ema_live_4VbYwDbGWLT2lsyhjB765fUHFTzSYJpos2G0yvbg"
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key} : ${result[key]}</div>`
        }
    }

    resultcont.innerHTML = str
})

