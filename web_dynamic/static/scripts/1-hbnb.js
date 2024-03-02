$(function()
{
    const amenity_dict = {};
    $("input[type=checkbox]").change( function() 
    {
        if ($(this).is(":checked")) {
            amenity_dict[$(this).attr("data-id")] = $(this).attr("data-name");
        } else {
            delete amenity_dict[$(this).attr("data-id")];
        }
        $(".amenities h4").text(Object.values(amenity_dict).join(", "));
    });
});
