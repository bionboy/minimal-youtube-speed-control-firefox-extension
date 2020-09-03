
function listenForClicks() {
    document.addEventListener("click", (e) => {
        let amount = 0;
        if (e.target.id === "minus")
            amount = -.25
        else if (e.target.id === "plus")
            amount = .25

        cheatUpdate(amount)
        browser.tabs.query({ active: true, currentWindow: true })
            .then((tabs) => {
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "bump",
                    amount: amount
                })
            })
    })
}

// todo: Try to update display value from bumprate script
// function listenForFeedback(){
//     browser.runtime.onMessage.addListener((message) => {
//         console.log("feedback received");

//         if (message.command === "update")
//             document.getElementById("rate").value = message.playbackRate
//     });
// }

//! cheat: just fake it
function cheatUpdate(amount){
    let rateElm = document.getElementById("rate")
    rateElm.value = Number(rateElm.value) + amount
}


browser.tabs.executeScript({ file: "bumpRate.js" })
    .then(listenForClicks)
    .then(listenForFeedback)