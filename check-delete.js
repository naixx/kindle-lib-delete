$(document).ready(function() {
  $('#ordersSortingRow .firstCol').append('<input type="checkbox" name="asinAll">').click(function(e) {
  $('input[name=asin]').each(function(i, item) {
	  item.checked = e.target.checked;
	});
  });
  $('.firstCol').css('width', 'auto');
  $('.rowBodyCollapsed').each(function(i){
    $('#Row'+(i+1)+'Button')
      .css('white-space', 'nowrap')
      .prepend('<input type="checkbox" name="asin" value="'+$(this).attr('asin')+'">');
  });

  $('#pagination').prepend('<input type="button" id="bulkDelete" value="Bulk Delete">');
  $('#bulkDelete').click(function() {
    $('input[name=asin]:checked').each(function() {
//      alert($(this).val());
      Fion.deleteItem('deleteItem_'+$(this).val());
    });
  });

});