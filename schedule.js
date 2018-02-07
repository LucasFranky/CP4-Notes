	
	var exp = 'selectClass';
switch (expr) {
  case 'Math':
	selectClass = "Math"
    console.log('Math is hard choose something else.');
    break;
  case 'English':
	selectClass = "English"
    console.log('Go reading!');
    break;
  case 'History':
	selectClass = "History"
    console.log('Thats old news.');
    break;
  case 'Science':
	selectClass = "Science"
	console.log('Lets learn about space.')
	break;
  case 'ThArts':
	selectClass = "ThArts"
	console.log('Want to become an actor?')
	break;
  case 'CompProg':
	selectClass = "CompProg"
	console.log('Want to know how I did this?')
	break;
  case 'French':
	selectClass = "French"
	console.log('Parles-tu le francais?')
	break;
  case 'PhysEd':
	selectClass = "PhysEd"
	console.log('Lets do some exercise.')
	break;
  case 'Speech':
	selectClass = "Speech"
	console.log('Lets get rid of stage fright together.')
	break;
  case 'Homeroom':
	selectClass = "Homeroom"
	console.log('Bake sale or movie?')
	break;
  case 'Advisors':
	selectClass = "Advisors"
	console.log('Heres some advice.')
	break;
  case 'L.A.':
	selectClass = "L.A."
	console.log('Grade level meeting.')
	break;
  default:
    console.log('Sorry, ' + expr + ' is not a course I am in.');
}

document.getElementById("Classes").value;
var className = document.getElementById("Classes").value;