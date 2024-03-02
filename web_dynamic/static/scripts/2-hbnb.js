$(function()
{
    $.get("http://0.0.0.0:5001/api/v1/status/", function (data, status) {
        if (status === 200) {
            $("div#api_status").addClass("available");
        } else {
            $("div#api_status").removeClass("available");
        }
    });
});