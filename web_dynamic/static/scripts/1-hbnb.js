<<<<<<< HEAD
window.addEventListener('load', function () {
  // task 2
  const amenityIds = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenityIds[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenityIds[$(this).attr('data-id')];
    }
    if (Object.keys(amenityIds).length === 0) {
      $('div.amenities h4').html('&nbsp');
    } else {
      $('div.amenities h4').text(Object.values(amenityIds).join(', '));
    }
  });
=======
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
>>>>>>> 5914503c7b43873af1c44140d2de5cab66423e55
});
