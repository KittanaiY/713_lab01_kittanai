waitAndPrint = (message, round) => {
    var accumulatedMessage = "";
    for (let i = 0; i < round; i++) {
        setTimeout(() => {
            accumulatedMessage += message;
            console.log(accumulatedMessage);
        }, i * 3000);
    }
};

waitAndPrint('E', 3);
