function createPost() {
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;

  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);
}

function postComment() {

}
