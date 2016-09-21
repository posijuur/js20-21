'use strict';

;jQuery(document).ready(function () {
	var findCheckBox = function findCheckBox() {

		var countCheckedInput = null;
		var findDataInInput = null;
		var countTrueAnswer = null;
		var countFalseAnswer = null;
		var $result = $('.modal-window_result');
		var $inputs = $('.input');
		var $modalWindow = $('.modal-window');;
		var $countQuestion = $('.question_item').length;
		countCheckedInput = $('label > .input:checked');
		countCheckedInput.each(function (index, el) {
			findDataInInput = $(el).data('action');
			if (findDataInInput) {
				countTrueAnswer++;
			} else {
				countFalseAnswer++;
			}
		});
		if ($countQuestion == countTrueAnswer && !countFalseAnswer) {
			$result.html('Поздравляю вы прошли тест!!!');
		} else {
			$result.html('Попробуйте еще раз!');
		}

		$modalWindow.css('display', 'block');
	};

	$('.submit').on('click', function (event) {
		event.preventDefault();
		findCheckBox();
	});
});