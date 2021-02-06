

	const user = prompt("Введіть своє ім'я");
	const City = prompt("Введіть своє місто");
	const Age =  parseInt(prompt("Введіть свiй вік"));

      
	if(!user || !City  || !Age ||
		typeof user !== "string" ||
		typeof City !== "string" ||
		typeof Age !== "number"
){

alert("Неправильно введені данні")
}
if(Age >=21 && Age < 45){
	alert("Ласкаво просимо в клуб ")
}
else if(Age >=46){
	alert("Ви застарі для цього клубу")
}

else if(Age < 18){
	alert("Oсоба до 18 років намагалась потрапити в клуб")
}
if(Age > 18 && Age < 21  ){
	alert("Недостатній вік для входу в клуб")
}

