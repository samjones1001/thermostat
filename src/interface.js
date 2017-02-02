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
  if ( $('.onoffswitch-checkbox').is(':checked') ) {
    $('#powersaving').text('jump');
  }
  else {
    $('#powersaving').text('off');
}

//   if ( $('input[name="subscribe"]').is(':checked') ) {
//     $('input[name="email"]').show();
// }
// else {
//     $('input[name="email"]').hide();
// }

  function updateTemperature() {
    $('#currenttemp').text(thermostat._temp);
  }
});
