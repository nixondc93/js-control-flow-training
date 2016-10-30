console.log("sing.js loaded");

function bottlesOfBeer(num){
	song = '';

	for(num; num >= 1; num--){
		if( num === 1){
			song += num + ' bottle of beer on the wall,\n' + num + ' bottle of beer! \nTake one down and pass it around,\nNo more bottles of beer on the wall...\n\n';
		} else if(num === 2){
			song += num + ' bottles of beer on the wall,\n' + num + ' bottles of beer! \nTake one down and pass it around,\n' + (num - 1) + ' bottle of beer on the wall...\n\n';
		} else{
		song += num + ' bottles of beer on the wall,\n' + num + ' bottles of beer! \nTake one down and pass it around,\n' + (num - 1) + ' bottles of beer on the wall...\n\n';
		}

	}
	return song;
}

// console.log(bottlesOfBeer(prompt('How many verses would you like to hear?')));
