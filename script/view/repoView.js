(function(module){
  var repoViewObj = {};
  var repoCompiler = Handlebars.compile($('#github-template').html());

  repoViewObj.renderRepo = function() {
    $('.github-content').empty().append(repo.withTheAttribute('name').map(repoCompiler));
  };

  repo.requestRepos(repoViewObj.renderRepo);

  module.repoViewObj = repoViewObj;
})(window);
