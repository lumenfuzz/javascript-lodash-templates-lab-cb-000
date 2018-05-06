function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;

  //create template strings
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  //create template functions
  var templateFn = _.template(pageTemplate, postTemplate);
  var pageTemplateFn = _.template(pageTemplate);
  var postTemplateFn = _.template(postTemplate);

  //get HTMLspace for the post
  var thePostDiv = document.getElementById("the_post");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'title': postTitle, 'body': postBody, 'author': postAuthor });

  //append rather than replace!
  thePostDiv.innerHTML += templateHTML;
}

function postComment() {
  var commentTemplate = document.getElementById("comment-template").innerHTML;

  var commentTemplateFn = _.template(commentTemplate);
}
