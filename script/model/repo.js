(function(module) {
  var repo = {};

  repo.reposArray = [];

  repo.requestRepos = function(callback){
    $.ajax({
      url:'https://api.github.com/users/devonhackley/repos'+ '?per_page=3' +'&sort=updated',
      method: 'GET',
      headers: {'Authorization': 'token ' + devonToken},
      success: function(data,message, xhr){
        repo.reposArray = data;
        callback();
      }
    });
  };

  repo.withTheAttribute = function(myAttr) {
    return repo.reposArray.filter(function(someRepo){
      return someRepo[myAttr];
    });
  };

  module.repo = repo;
  
})(window);
