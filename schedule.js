	var selectedClass;
	function Class() {
	var className = document.getElementById("selectedClass").value;
	switch (className)  {
	case 'Math':
	selectedClass = "Math"
    break;
  case 'English':
	selectedClass = "English"
    break;
  case 'History':
	selectedClass = "History"
    break;
  case 'Science':
	selectedClass = "Science"
	break;
  case 'ThArts':
	selectedClass = "ThArts"
	break;
  case 'CompProg':
	selectedClass = "CompProg"
	break;
  case 'French':
	selectedClass = "French"
	break;
  case 'PhysEd':
	selectedClass = "PhysEd"
	break;
  case 'Speech':
	selectedClass = "Speech"
	break;
  case 'Homeroom':
	selectedClass = "Homeroom"
	break;
  case 'Advisors':
	selectedClass = "Advisors"
	break;
  case 'L.A.':
	selectedClass = "L.A."
	break;
  default:
	console.log('Not a class, sorry.');
	}
	var theclass = document.getElementsByClassName(selectedClass);
					for (i=0 ; i<theclass.length ; i++) {
						theclass[i].style.backgroundColor = "blue" ;
