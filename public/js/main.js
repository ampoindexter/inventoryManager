'use strict';

$(document).ready(init);

function init() {
  $('.items').click(selectItem);
}

function selectItem() {
  $(this).toggleClass('selected');
}
