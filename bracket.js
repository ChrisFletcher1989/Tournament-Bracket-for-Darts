let player= document.getElementsByClassName("playerLabel")
let box= document.getElementsByClassName("box")
let option= document.getElementsByClassName("option")
let randomise= document.getElementById("randomise")
let numberOfPlayers=document.getElementById("competitors")
let printPDF=document.getElementById("generatePDF")
let inputElements = document.querySelectorAll(".newPlayers"); 
let addPlayers = () =>{
    let a = numberOfPlayers.value
        console.log(a)
        playerNames.innerHTML = "";
        first.innerHTML = "";
        second.innerHTML = "";
        third.innerHTML = "";
        fourth.innerHTML = "";
        fifth.innerHTML = "";
        fifth.innerHTML = "";


  for (let i = 1; i <= a; i++) {
    let newPlayer = document.createElement("input");
    newPlayer.setAttribute("type", "text"); 
    newPlayer.setAttribute("placeholder", "Player " + i); 
    newPlayer.setAttribute("class", "newPlayers"); 

    playerNames.appendChild(newPlayer);

    let bracket = document.createElement("div");
    bracket.setAttribute("class", "box"); 
    let paragraph = document.createElement("p");
    paragraph.setAttribute("class", "playerLabel1")
    paragraph.textContent = "Awaiting player info";
    bracket.appendChild(paragraph);    
    first.appendChild(bracket)
  }
  a=a/2
    console.log("New A ", a)
    if(a>=1){
        for (let i = 1; i <= a; i++) {
        
            let bracket = document.createElement("div");
            bracket.setAttribute("class", "box"); 
            let paragraph = document.createElement("p");
            paragraph.setAttribute("class", "playerLabel")
            paragraph.textContent = "Winner of round 1 G" + i;
            bracket.appendChild(paragraph);    
            second.appendChild(bracket)
          }
    }
    a=a/2
    console.log("New A ", a)
    if(a>=1){
        for (let i = 1; i <= a; i++) {
        let bracket = document.createElement("div");
        bracket.setAttribute("class", "box"); 
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "playerLabel")
        paragraph.textContent = "Winner of round 2 G" + i;
        bracket.appendChild(paragraph);    
        third.appendChild(bracket)
}
    }
    a=a/2
    console.log("New A ", a)
    if(a>=1){
        for (let i = 1; i <= a; i++) {
        let bracket = document.createElement("div");
        bracket.setAttribute("class", "box"); 
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "playerLabel")
        paragraph.textContent = "Winner of round 3 G" + i;
        bracket.appendChild(paragraph);    
        fourth.appendChild(bracket)
}
    }
    a=a/2
    console.log("New A ", a)
    if(a>=1){
        for (let i = 1; i <= a; i++) {
        let bracket = document.createElement("div");
        bracket.setAttribute("class", "box"); 
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "playerLabel")
        paragraph.textContent = "Winner of round 4 G" + i;
        bracket.appendChild(paragraph);    
        fifth.appendChild(bracket)
}
    }
    a=a/2
    console.log("New A ", a)
    if(a>=1){
        for (let i = 1; i <= a; i++) {
        let bracket = document.createElement("div");
        bracket.setAttribute("class", "box"); 
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class", "playerLabel")
        paragraph.textContent = "Winner of round 5 G" + i;
        bracket.appendChild(paragraph);    
        sixth.appendChild(bracket)
}
    }
}
let addNames = () => {
    let names = [];
    let inputElements = document.querySelectorAll(".newPlayers"); 
    inputElements.forEach((inputElement) => {
      names.push(inputElement.value);
    });
    let randomNames=[]
    while(names.length>0){
        let i = Math.floor(Math.random() * names.length)
            randomNames.push(names[i])
            names.splice(i, 1)
            i=0;
    }
    let playersToRandomise = document.querySelectorAll(".playerLabel1");
    let game=1;
    for(let i=0; i<playersToRandomise.length; i++){
        playersToRandomise[i].innerHTML="G"+Math.floor(game)+" "+randomNames[i];
        game+=0.5
    }
  };
  function printFunction(){
    window.print()
  }
  
    numberOfPlayers.addEventListener("click", addPlayers);
    randomise.addEventListener("click", addNames);
    printPDF.addEventListener("click", printFunction);


