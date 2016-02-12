$(document).ready(function() {

  /* INITIAL TIMER SETTINGS */
  var work_timer_start = 5;
  var break_timer_start = 1;
  var work_timer = work_timer_start;
  var break_timer = break_timer_start;

  /* GRAB SOUND OBJECT */
  var bell = $('#sound')[0];

  /* MAKE INTERVAL OBJ GLOBAL */
  var seconds_interval;

  /* LEADING ZERO PADDING */
  function pad(str) {
    str = str.toString();
    return str.length < 2 ? "0" + str : str;
  }

  /* INITIAL COUNTER SET */
  $('#work-timer .display').text(pad(work_timer_start));
  $('#break-timer .display').text(pad(break_timer_start));

  /* BREAK COUNT DOWN */
  function break_countdown() {
    if (break_timer > 0) break_timer--;
    $('#break-timer .display').text(pad(break_timer));
    if (break_timer == 0) {
      clearInterval(seconds_interval);
      bell.play();
      $('#start').removeClass('disabled');
    }
  }

  /* WORK COUNT DOWN */
  function work_countdown() {
    if (work_timer > 0) work_timer--;
    $('#work-timer .display').text(pad(work_timer));
    if (work_timer == 0) {
      clearInterval(seconds_interval);
      bell.play();
      seconds_interval = setInterval(break_countdown, 1000);
    }
  }

  /* CLICK WORK DEC */
  $('#work-timer').find('button').first().click( function() {
    if (work_timer > 0) work_timer--;
    $('#work-timer .display').text(pad(work_timer));
  });

  /* CLICK WORK INC */
  $('#work-timer').find('button').last().click( function() {
    work_timer++;
    $('#work-timer .display').text(pad(work_timer));
  });

  /* CLICK BREAK DEC */
  $('#break-timer').find('button').first().click( function() {
    if (break_timer > 0) break_timer--;
    $('#break-timer .display').text(pad(break_timer));
  });

  /* CLICK BREAK INC */
  $('#break-timer').find('button').last().click( function() {
    break_timer++;
    $('#break-timer .display').text(pad(break_timer));
  });

  /* CLICK START */
  $('#start').click(function() {
    if ($(this).hasClass('disabled')) return;
    $(this).addClass('disabled');
    seconds_interval = setInterval(work_countdown, 1000);
  });

  /* CLICK RESET */
  $('#clock_reset').click(function() {
    $('.work_timer').text(pad(work_timer_start));
    work_timer = work_timer_start;
    clearInterval(seconds_interval);
    $('#start').removeClass('disabled');
    bell.play();
  });

  /* SOUND TEST CLICK
  $('#sound_test').click(function() {
    bell.play();
  });  */
});
