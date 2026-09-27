function openInvitation(){

document.getElementById("content")
.scrollIntoView({
behavior:"smooth"
});

}


let target =
new Date("December 20, 2026 08:00:00")
.getTime();


setInterval(()=>{

let now=new Date().getTime();

let distance=target-now;


let day=
Math.floor(distance/(1000*60*60*24));


let hour=
Math.floor(
(distance%(1000*60*60*24))
/(1000*60*60)
);


let minute=
Math.floor(
(distance%(1000*60*60))
/(1000*60)
);


let second=
Math.floor(
(distance%(1000*60))
/1000
);


document.getElementById("countdown")
.innerHTML=
`${day} Hari ${hour} Jam ${minute} Menit ${second} Detik`;


},1000);