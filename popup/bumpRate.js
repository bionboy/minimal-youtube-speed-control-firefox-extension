console.log("bump script");
browser.runtime.onMessage.addListener((message) => {
    let device = document.getElementsByTagName("video")[0]

    if (message.command === "bump")
        device.playbackRate += message.amount
});