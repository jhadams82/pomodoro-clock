$(document).ready(function() {

  var bell = $('#sound')[0];
  var work_count_start = 5;
  var break_count_start = 1;
  var work_count = work_count_start;
  var break_count = break_count_start;
  var seconds_interval;

  /* LEADING ZERO PADDING */
  function pad(str) {
    str = str.toString();
    return str.length < 2 ? "0" + str : str;
}

  /* INITIAL COUNTER SET */
  $('.work_timer').text(pad(work_count_start));
  $('.break_timer').text(pad(break_count_start));

  /* COUNT DOWN */
  function countdown() {
    count--;
    $('.work_timer').text(pad(work_count));
    if (count == 0) {
      clearInterval(seconds_interval);
      bell.play();
    }
  };

  /* CLICK START */
  $('#start').click(function() {
    if ($(this).hasClass('disabled')) return;
    $(this).addClass('disabled');
    seconds_interval = setInterval(countdown, 1000);
  });

  /* CLICK RESET */
  $('#clock_reset').click(function() {
    $('.work_timer').text(pad(count_start));
    work_count = work_count_start;
    clearInterval(seconds_interval);
    $('#start').removeClass('disabled');
    bell.play();
  });

  /* CLICK SOUND TEST */
  $('#sound_test').click(function() {
    bell.play();
  });

});
