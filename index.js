function multi(){
    let forInput = document.getElementById("forInput").value;
    let array = [1,2,3,4,5,6,7,8,9,10,11,12]
    for(l = 0; l < array.length; l++){
    const element = array[l]
    show.innerHTML += `${forInput} x ${array[l]} = ${element*forInput} <br> `
    show.classList.add("show")
    }


}

function remove(){
   show.innerHTML = ""

}