$(function () {
  $('#fb_btn').on('click', function () {
    window.location.href = 'http://facebook.com/doodelsinc';
  });
  $('#support_btn').click(function(){
      var token = function(res){
        var $input = $('<input type=hidden name=stripeToken />').val(res.id);
        $('form').append($input).submit();
      };

      StripeCheckout.open({
        key:         'pk_test_KL3gwhbEY0xY4LVIiBAtfN2V',
        address:     true,
        amount:      20,
        currency:    'usd',
        name:        'Doodels One Cryon',
        panelLabel:  'Support',
        token:       token
      });

      return false;
	});
});