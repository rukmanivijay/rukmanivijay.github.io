// async function fetchData() {
//     const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record=await res.json();
//     document.getElementById("date").innerHTML=record.data[0].date;
//     document.getElementById("areaName").innerHTML=record.data[0].areaName;
//     document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
//     document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
// }
// fetchData();

/*document.addEventListener('mousedown', function (e) {
    console.log('mouse down');
}, false);*/

let pageContent;
document.addEventListener('mousedown', function (e) {
	document.addEventListener('selectionchange',function (e){
		//console.log(document.getSelection().toString());
		//console.log(document.selection.createRange().toString());
	  pageContent = document.getSelection ? document.getSelection().toString() :  document.selection.createRange().toString() ;
	  //console.log(selection);
	  document.getElementById("pageContent").innerHTML=selection;
	});
}, false);	

document.addEventListener('mouseup', function (e) {
	console.log(pageContent);
}, false);	


//let paragraphs = document.getElementsByTagName("p");