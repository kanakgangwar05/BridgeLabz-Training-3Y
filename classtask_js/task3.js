//task3: generate random hex-color
function generateHexColor(){
    let arrr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    let ans="#";
    
    for(let i=0;i<6;i++){
        let randomValue=Math.floor(Math.random()*15);
        ans+=arrr[randomValue];
    }
    console.log(ans);
    document.body.style.backgroundColor=ans;
}
generateHexColor();