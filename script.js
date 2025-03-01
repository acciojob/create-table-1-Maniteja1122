function insert_Row() {
    //Write your code here
	let btn = document.getElementsByTagName("input")
	let tableBody = document.querySelector("#sampleTable")
	let row = tableBody.insertRow(0);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);

	cell1.innerHTML = "New Cell1"
	cell2.innerHTML = "New Cell2"
	
}
