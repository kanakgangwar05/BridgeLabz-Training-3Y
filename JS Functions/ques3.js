let user = {
    name: "Kanak",

    showName: () => {
        console.log(this.name);
    }
};

user.showName(); 
let user2 = {
    name: "Kanak",

    showName: function () {
        console.log(this.name);
    }
};

user2.showName();