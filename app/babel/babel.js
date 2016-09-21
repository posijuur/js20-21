;jQuery(document).ready(() => {

	var question = {

		makeItem : [
			{description : 'Сколько у тебя рук?',
			 subDescription : [
				{answer : 'Одна рука',
				 check  : 0,
				},
				{answer : 'Две руки',
				 check  : 1,
				},
				{answer : 'Три руки',
				 check  : 0,
				},
			 ],
			},

			{description : 'Сколько у тебя ушей?',
			subDescription : [
					{answer : 'Три уха',
					 check  : 0,
					},
					{answer : 'Их нет',
					 check  : 0,
					},
					{answer : 'Два уха',
					 check  : 1,
					},
			],
			},

			{description : 'Сколько у тебя ног?',
				subDescription : [
				{answer : 'Три ноги',
				 check  : 0,
				},
				{answer : 'Четыре ноги',
				 check  : 0,
				},
				{answer : 'Две ноги',
				 check  : 1,
				},
			 ],
			},
		],
	}

	let str = JSON.stringify(question);
	let obj = JSON.parse(str);

	let $plaseHolder = $('.js-wrap');
	let $tpl_src = $('#templ').text();
	let _tpl = _.template($tpl_src);
	$plaseHolder.html(_tpl(obj));		
	
});