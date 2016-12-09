var portfolioView = {};

portfolioView.handleNavBar = function() {
  $('#site-nav').on('click', '.site-tab', function() {
    $('.content').hide();
    $('#'+ $(this).data('content')).fadeIn('fast');
    $('#' + $(this).data('content')).fadeIn('fast');
  });
  $('#site-nav .site-nav:first').click();
};

portfolioView.renderIndexPage = function() {
  Project.projects.forEach(function(a){
    $('#lower-content').append(a.toHtml());
  });
  portfolioView.handleNavBar();
};

Project.fetchAll();
