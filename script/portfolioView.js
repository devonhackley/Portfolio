var portfolioView = {};

portfolioView.handleNavBar = function() {
  $('#site-nav').on('click', '.site-tab', function() {
    $('.content').hide();
    $('#'+ $(this).data('content')).fadeIn('slow');
    $('#' + $(this).data('content')).fadeIn('fast');
  });
  $('#site-nav .site-nav:first').click();
};

portfolioView.handleNavBar();
