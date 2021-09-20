


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/admin/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert(" Updated Successfully!");
    })

})

if(window.location.pathname == "/admin"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/admin/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Deleted Successfully!");
                location.reload();
            })
        }

    })
}