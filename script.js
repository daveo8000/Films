// caps on first word
const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomInt = (min, max) => {
  	return Math.floor(Math.random() * (max - min)) + min;
}

const generateName = () => {
	let name1 = ['blade', 'Blade2', 'The Krays', 'The Shawsank Redemption',
          'The Lost boys', 'Fight Club', 'The matrix', 'Enermy Of The State', 'Buster', 'Friday'];

	

	let name = capFirst(name1[getRandomInt(0, name1.length + 1)]) ;
	//return name;
    document.getElementById('findFilm').innerHTML ='Are choice is: ' + name;
}


/*function generateName() {
    document.getElementById('').innerHTML = 'hello';
}*/
let color = document.getElementById("bgcolor");
let ele = document.getElementById("element");
let js1 = document.getElementById("java1")
let js2 = document.getElementById("java2")

const colorChange = () => {
    js1.style.background = "black";
    color.style.color = "white";
    ele.style.background = "white";
    js2.style.background = "blue"
    
    
}

const changeElement = () => {
    ele.innerHTML = "<h1>Now i am H1 </h1>"
   
}

const timeDate = () => {
    document.getElementById("timeNow").innerHTML = "Date : " + Date() ;
   
    

} 


