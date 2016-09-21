;jQuery(document).ready(() => {
	let findCheckBox = () => {

		let countCheckedInput = null;	
		let findDataInInput = null;	
		let countTrueAnswer = null;	
		let countFalseAnswer = null;	
		let $result = $('.modal-window_result');
 		let $inputs = $('.input');	
 		let $modalWindow = $('.modal-window');;
 		let $countQuestion = $('.question_item').length;
		countCheckedInput = $('label > .input:checked');
		countCheckedInput.each((index, el) => {
			findDataInInput = $(el).data('action');
			if (findDataInInput) {
				countTrueAnswer++
			} else {
				countFalseAnswer++
			}
		});
		if ($countQuestion == countTrueAnswer && !countFalseAnswer) {
			$result.html('Поздравляю вы прошли тест!!!');
		} else {
			$result.html('Попробуйте еще раз!');
		}

		$modalWindow.css('display', 'block'); 
	}


	$('.submit').on('click', (event) => {
		event.preventDefault();
		findCheckBox();
	});
});