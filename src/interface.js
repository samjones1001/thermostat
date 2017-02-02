$(document).ready(function() {

    var thermostat = new Thermostat();
    updateTemperature();
  $('#up').on('click', function() {
    thermostat.increase();
    updateTemperature();
  });

  $('#down').on('click', function() {
    thermostat.decrease();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  // $('.onoffswitch-checkbox').change(function() {
  //   $('#powersaving').text(jump);
  // }
//   if ( $('.onoffswitch-checkbox').is(':checked') ) {
//     $('#powersaving').html('jump');
//   }
//   else if ( $('.onoffswitch-checkbox').not(':checked') ) {
//     $('#powersaving').html('off');
// }

//   if ( $('input[name="subscribe"]').is(':checked') ) {
//     $('input[name="email"]').show();
// }
// else {
//     $('input[name="email"]').hide();
// }

$('.onoffswitch-label').click(function() {
  console.log("one " + thermostat.isPowerSave())
    if(thermostat.powerSaveStatus == false) {
      console.log("on")
    thermostat.powerSaveOn();
  } else {
    console.log("off")
      thermostat.powerSaveOff();
  }
  console.log("two " + thermostat.isPowerSave())
  $('#powersaving').text(thermostat.isPowerSave());
});

  function updateTemperature() {
    $('#currenttemp').text(thermostat._temp);
  }
});



