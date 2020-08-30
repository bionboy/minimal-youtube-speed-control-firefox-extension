
let player = document.getElementsByTagName("video")[0]
let playbackRate = player.playbackRate

function changeRate(rate = 1.0) {
    playbackRate = rate

    document.getElementById("rate").value = rate

    rateElement.value = rate
    console.log("Changed video rate to: ", rate)
}

function stepRate(step = 0.25) {
    console.log('button press')
    changeRate(playbackRate + step)
}

function clickListener() {
    document.addEventListener("click", (e) => {
        console.log("SPEDDDDDDDDDDDDddd");
        if (e.target.id == "minus")
            stepRate(-.25)
        else if (e.target.id == "plus")
            stepRate(.25)
    })
}

// Browser.tabs.executeScript({}).then(
//     clickListener()
// )
document.addEventListener("click", (e) => {
        console.log("SPEDDDDDDDDDDDDddd");
    console.log("da button")
    if (e.target.id == "minus")
        stepRate(-.25)
    else if (e.target.id == "plus")
        stepRate(.25)
})