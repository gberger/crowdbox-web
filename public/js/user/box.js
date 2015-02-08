// Generated by CoffeeScript 1.8.0

/*
For the box info
 */
$('form[name="songQuery"]').submit(function(event) {
  var data;
  console.log('Submitted query');
  data = {
    query: $('input[name="songQuery"]').val(),
    edisonId: $('#edisonId').val()
  };
  if (data.query.trim().length <= 0) {
    alert('Query Required');
    return;
  }
  $.ajax({
    type: 'post',
    url: '/box/box_addSong',
    data: data,
    success: function(res) {
      return alert(res.message);
    },
    error: function(err) {
      return alert('Error submitting query, try again.');
    }
  });
});

$(document).ready(function() {
  var currentSong;
  currentSong = $('#currentSong').val();
  if (currentSong >= 0) {
    $('#song' + currentSong).addClass('currentSong');
  }
  return $('form[name="songOption"]').submit(function(event) {
    var data, op, zone;
    op = $("button[type=submit][over=true]").attr('name');
    console.log('Submitted ' + op);
    data = {
      songId: $(this).attr('songId'),
      edisonId: $('#edisonId').val(),
      index: parseInt($(this).attr('index'))
    };
    if (op === 'remove') {
      zone = 'user';
    } else {
      zone = 'box';
    }
    $.ajax({
      type: 'post',
      url: '/' + zone + '/box_' + op + 'Song',
      data: data,
      success: function(res) {
        return alert(res.message);
      },
      error: function(err) {
        return alert('Error with preforming ' + op + ', try again.');
      }
    });
  });
});

$('form button[type="submit"]').hover(function() {
  return $(this).attr('over', true);
}, function() {
  return $(this).attr('over', false);
});
