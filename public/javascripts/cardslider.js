$(document).ready(function() { //perform actions when DOM is ready
  var z = 0; //for setting the initial z-index's
  var inAnimation = false; //flag for testing if we are in a animation
  
  $('#pictures .card-div').each(function() { //set the initial z-index's
    z++; //at the end we have the highest z-index value stored in the z variable
    $(this).css('z-index', z); //apply increased z-index to <img>
  });

  function swapFirstLast(isFirst) {
    if(inAnimation) return false; //if already swapping pictures just return
    else inAnimation = true; //set the flag that we process a image
    
    var processZindex, direction, newZindex, inDeCrease; //change for previous or next image
	var obj = document.getElementById('shadow');
	obj.style.display = "block";
    if(isFirst) { processZindex = z; direction = '-'; newZindex = 1; inDeCrease = 1; } //set variables for "next" action
    else { processZindex = 1; direction = ''; newZindex = z; inDeCrease = -1; } //set variables for "previous" action
    
    $('#pictures .card-div').each(function() { //process each image
      if(($(this).css('z-index') == processZindex)) { //if its the image we need to process
        $(this).animate({ 'top' : direction + $(this).height() + 'px' }, 'slow', function() { //animate the img above/under the gallery (assuming all pictures are equal height)
          $(this).css('z-index', newZindex) //set new z-index
            .animate({ 'top' : '0' }, 'slow', function() { //animate the image back to its original position
              inAnimation = false; //reset the flag
            });
        });
      } else { //not the image we need to process, only in/de-crease z-index
        $(this).animate({ 'top' : '0' }, 'slow', function() { //make sure to wait swapping the z-index when image is above/under the gallery
          $(this).css('z-index', parseInt($(this).css('z-index')) + inDeCrease); //in/de-crease the z-index by one
        }); 
      } 
    });
	$('#shadow').animate({ 'top' : '+' + '30px' }, 'slow', function() { 
          $('#shadow').animate({ 'top' : '8px' }, 'slow', function() {  
            });
        });
	$('#tack').animate({ 'top' : '+' + '5px' }, 'slow', function() { 
          $('#tack').animate({ 'top' : '10px' }, 'slow', function() {  
            });
        });
    return false;
  }
  
  $('#next a').click(function() {
    return swapFirstLast(true); //swap first image to last position
  });
  
  $('#prev a').click(function() {
    return swapFirstLast(false); //swap last image to first position
  });
});