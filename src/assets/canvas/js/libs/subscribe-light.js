$(document).ready(() => {
  jQuery("#widget-subscribe-form3").validate({
    submitHandler: function(form) {
      jQuery(form).find('.input-group-addon').find('.icon-email2').removeClass('icon-email2').addClass('icon-line-loader icon-spin');
      jQuery(form).ajaxSubmit({
        target: '#widget-subscribe-form3-result',
        success: function() {
          jQuery(form).find('.input-group-addon').find('.icon-line-loader').removeClass('icon-line-loader icon-spin').addClass('icon-email2');
          jQuery('#widget-subscribe-form3').find('.form-control').val('');
          jQuery('#widget-subscribe-form3-result').attr('data-notify-msg', jQuery('#widget-subscribe-form3-result').html()).html('');
          SEMICOLON.widget.notifications(jQuery('#widget-subscribe-form3-result'));
        }
      });
    }
  });
});
