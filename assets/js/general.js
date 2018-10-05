// Characters Left

$(document).ready(function() {
  var len = 0;
  var maxchar = 300;

  $( '#my-input' ).keyup(function(){
    len = this.value.length
    if(len > maxchar){
        return false;
    }
    else if (len > 0) {
        $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ) );
    }
    else {
        $( "#remainingC" ).html( "Remaining characters: " +( maxchar ) );
    }
  })
});