var todoAdd = $("#task");
var filter = $("#filter");
// function clearall() {
//     $("#todoList").empty();

//     filter.val("");
// }

// $("#clear").click(clear);

$("#task").focus();

$("#taskForm").on("submit", function(x){
    x.preventDefault();

    $("#todoList").prepend(`<li class="list-group-item d-flex align-items-center">${todoAdd.val()}<i class="fas fa-times text-danger mr-auto delete-item"></i><input type="checkbox" class="todo-item" style="margin-left:auto;"> </li>`);
    todoAdd.val("");
    $("#task").focus();

  });
  
$(filter).on('keyup', filterTask);

  $("#todoList").on("click", ".todo-item", function(){
    $(this).parent().toggleClass("done");
});

function filterTask(e) {
    const text = e.target.value.toLowerCase();
    $('.list-group-item').each(function() {
      const item = $(this).text().toLowerCase();
      if (item.indexOf(text) !== -1) {
        $(this).addClass('d-flex').show();
      } else {
        $(this).removeClass('d-flex').hide();
      }
    });
  }

  $('#clear').on('click', function(){
    $(".todo-item:checked").parent().remove(); 
  });

  // function clear() {
  //   if(".todo-item:checked"){
  //     $(".todo-item:checked").parent().remove();
  //   }else{
  //     $("#todoList").empty();
  //      filter.val("");
  //   }
  // }


