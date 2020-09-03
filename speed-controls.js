
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