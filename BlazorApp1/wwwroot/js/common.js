window.showToastr = function (type, message) {
    if (type === "success") {
        toastr.success(message);
    }
    if (type === "error") {
        toastr.error(message);
    }
}

window.ShowSwal = function(type, message)
{
    if(type === "success")
    {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    if (type === "error")
    {
        Swal.fire({
            title: "failed",
            text: "Not valid",
            icon: "error"
        });
    }
}