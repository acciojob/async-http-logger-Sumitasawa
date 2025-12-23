//your JS code here. If required.

async function getData(){
	try{
	const res=await fetch("https://jsonplaceholder.typicode.com/todos/1");
	if(!res.ok){
		throw new Error("Network response was not ok")
	}
	const data=await res.json();
	console.log(data);
	}catch(err){
		console.log(err)
	}
}
getData();
