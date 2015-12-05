$(document).ready(function() {

  var bell = $('#sound')[0];
  var count_start = 5;
  var count = count_start;
  var seconds_interval;

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

  /* INITIAL COUNTER SET */
  $('.minute_hand').text("00");
  $('.second_hand').text(pad(count_start, 2));

  /* COUNT DOWN */
  function test_countdown() {
    count--;
    $('.second_hand').text(pad(count, 2));
    if (count == 0) {
      clearInterval(seconds_interval);
      bell.play();
    }
  };

  /* CLICK START */
  $('#start').click(function() {
    if ($(this).hasClass('disabled')) return;
    $(this).addClass('disabled');
    seconds_interval = setInterval(test_countdown, 1000);
  });

  /* CLICK RESET */
  $('#clock_reset').click(function() {
    $('.second_hand').text(pad(count_start, 2));
    count = count_start;
    clearInterval(seconds_interval);
    $('#start').removeClass('disabled');
    bell.play();
  });

  /* CLICK SOUND TEST */
  $('#sound_test').click(function() {
    bell.play();
  });

});
