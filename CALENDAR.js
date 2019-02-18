var mes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d = new Date();
var y = d.getFullYear();
var m = d.getMonth();
function calendar(year, month) {
	var days = Date.UTC(year, month+1)-Date.UTC(year, month);
	days/=1000*60*60*24;
	var startDay = new Date(year, month);
	var index = (startDay.getDay()+6)%7;
	
	var rows = Math.ceil((index+days)/7);
	
	var table = '<table border="1">';
	table+='<caption>';
	table+=mes[month]+' '+year;
	table+='</caption>';
	
	var k = 1-index;
	for(var i = 0; i<rows; i++) {
		table+='<tr>';
		for(var j = 0; j<7; j++) {
			table+='<td>';
			if(k > 0 && k <= days) {
				table+=k;
			}
			k++;
			table+='</td>';
		}
		table+='</tr>';
	}
	
	
	document.write(table);
};
calendar(y, m);