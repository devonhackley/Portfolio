

page('/', index);
page('/about', aboutController.displayAbout);
page('/projects', projectController.displayProject);

function index(ctx){
  $('.content').hide();
  $('.content').show();
}
page();
