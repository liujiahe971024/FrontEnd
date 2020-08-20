/*
function check(){
	if(arguments[0].length != arguments[1].length){
		console.log(false);
		return;
	}
	arguments[0].sort();
	arguments[1].sort();
	console.log(JSON.stringify(arguments[0])==JSON.stringify(arguments[1])); 
}

check([1,2,3], [1,3,2])
*/
function merge(){
    let x = arguments[0].concat(arguments[1])
    x.sort(function(a,b){return a-b})
    console.log(x.length % 2 == 0? ((x[Math.floor(x.length / 2)-1] + x[Math.floor(x.length / 2)]) / 2) : x[Math.floor(x.length / 2)])
}

merge([1,3,4], [2])