  $('#btn').on('click', function(e) {
    $('#skm_LockPane').addClass('LockOn');
    var millisecondsToWait = 100;
    setTimeout(function() {
      $('#skm_LockPane').removeClass('LockOn');

      setTimeout(function() {
        document.location.href = "fokusd2.html";
      }, 250);
      $('audio')[0].play();
    }, millisecondsToWait);





















  });
