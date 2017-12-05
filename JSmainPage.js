$(document).ready(() => {
  /*$("#uploadNewPostButton").click(uploadPost);*/
  $("#form").each(function(){
    $( this ).submit(function(e){
    console.log(e);
    return false;
      });
  });
    
    $("#form2").each(function(){
    $( this ).submit(function(e){
    console.log(e);
    e.preventDefault();
      });
  });
});
 
function uploadPost() {
  console.log("asdfas");
    empty=" ";
    title = $("#title-new-post").val();
    $("#title-new-post").text(empty);
    imageLink = $("#link-picture-new-post").val();
    console.log(title);
    if (title == ""){
      return;
    } else {
      let id = Math.floor(Math.random() * 100000)+1
      $(".posts.content").prepend(createPost(id));
      console.log(id)
      $("#"+id).find("#heading").text(title);
      $("#"+id).find("#image").attr("src",imageLink)
        console.log($("#"+id))
      $("#close").trigger("click");
    }
}

function createPost(id) {

  const html = '<div class="single-post container" id="'+id+'">'+
          '<div class="single-post-image-container">'+
          '<h2 class="single-post-heading" id ="heading"></h2>'+
          '<img class="single-post-image" id="image"/>'+
        '</div>'+
        '<div class="votes-cmmments-buttons">'+
          '<span class="votes-comments">'+
            '<span class="vote-buttons">'+
              '<button class="upvote-button"><span class="glyphicon glyphicon-arrow-up"></span> -vote </button>'+
              '<button class="downvote-button"><span class="glyphicon glyphicon-arrow-down"></span> -vote </button>'+
            '</span>'+
            '<span class="show-comment-button">'+
              '<button class="#" data-toggle="modal" data-target="#myModalCommentsPost'+id+'"><span class="glyphicon glyphicon-comment"></span> Comments </button>'+
            '</span>'+
          '</span>'+
        '</div>'+
       
        '<!--container class for modal-->'+
        '<div class="container">'+
        '<!-- Modal -->'+
         ' <div class="modal fade" id="myModalCommentsPost'+id+'" role="dialog">'+
         '   <div class="modal-dialog">'+
           '   <!-- Modal content-->'+
           '   <div class="modal-content">'+
           '       <div class="modal-header">'+
           '         <button type="button" class="close" data-dismiss="modal">&times;</button>'+
           '         <h4 class="modal-title">Comments</h4>'+
           '       </div>'+
           '       <div class="modal-body">'+
           '         <div class="modal-body-comments">'+
             
           '             <h4>Write Comment</h4>'+
           '             <input type="comment" id="input-text-comment-id-'+id+'"/>'+
           '             <button id="post-comment-post'+id+'" onClick="uploadComment('+id+')">Comment</button>'+
                  
           '         </div>'+
           '         <div class="comments-content">'+
           '           <div class="single-comment">'+
           '             <h4>User Name</h4>'+
           '             <p>Some text</p>'+
           '           </div>'+
           '         </div> '+
           '       </div>'+
           '       <div class="modal-footer">'+
           '         <button type="button" class="btn btn-default" data-dismiss="modal" id="close">Close</button>'+
      '            </div>'+
      '          </div>'+
      '        </div>'+
      '      </div>'+
      '    </div>'+
      '  </div><!--end of single post container-->'
 
      return html;
}




function createComment(name,content){
  const comment = '<div class="single-comment">'+
                   '     <h4>'+name+'</h4>'+
                   '     <p>'+content+'</p>'+
                   '   </div>'
  return comment;    
}

function uploadComment(id) {
  console.log("poqvih li se");
  let name = "Some user" + id;
  content = $("#input-text-comment-id-"+id).val();
    console.log(content);
  if(content == ""){
    return;
  } else {
    $("#myModalCommentsPost"+id).find(".comments-content").prepend(createComment(name, content));
  }
}