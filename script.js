let countEl = document.getElementById("count-el")
let kaydetEl = document.getElementById("kaydet-el")
let yazEl = document.getElementById("yaz-el")
let count = 0

function erdem(){
 count += 1
 countEl.textContent = count
}

function sıfır(){
 count =  0
 countEl.textContent = count
}
function kayıt(){
let countStr =  count + " - "
yazEl.innerText += countStr
console.log(count)
}
//
prompt("A:")
        let a=prompt("3+5")
        console.log((a))
        let save=confirm("number:")
        if(save==true){
            alert(true)
            console.log(true)
        }
        else{
            alert(false)
            console.log(false)
        }
 switch(a==1){
            case 1:
                console.log("saved")
            break;
            default:
                console.log("error")
            break;
 }
let s1=prompt("B:)
   switch(prompt("A:")){
            case "1":
                document.write("1")
            break;
            default:
                document.write("not")
            break;
        }
if(a>prompt("A:")){
  alert("ERROR!)
        }
else{
 a=s1
}
  a=promt()
