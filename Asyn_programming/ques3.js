function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.3;

            if (success) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(error => {
        console.log("Error:", error);
    });