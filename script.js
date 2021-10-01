// let tasks = document.querySelectorAll('.todo__list>li p');
// for (let item of tasks) {
// 	item.addEventListener('click', function () {
// 		item.classList.toggle('line');
// 	})
// }

let todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function (e) {
	console.log(e.target.tagName)
	if (e.target.tagName === 'P') {
		e.target.classList.toggle('line');
	}
})



let collection = document.querySelector('.collection');

collection.addEventListener('click', function (e) {

	if (e.target.classList.contains('collection-item') && !e.target.classList.contains('answer-item')) {
		e.target.nextElementSibling.classList.toggle('answer-item-show');
	}
})






let win = document.querySelector('#open-modal');
let modal = document.querySelector('#modal1');
win.addEventListener('click', function () {

	modal.classList.add('modal_open');
})


window.addEventListener('click', function (e) {

	if (e.target.closest('#modal1') !== modal && e.target !== win) {
		modal.classList.remove('modal_open');
	}

})

// task 4

let container = document.querySelector('.container');
let photo = document.querySelector('.photo>img');
let border = document.querySelectorAll('.image');

container.addEventListener('click', function (e) {
	for (let a of border) {
		a.classList.remove('active-image');

		if (e.target.closest('.image') === a) {
			if (e.target.tagName === 'IMG') {
				let srcgo = e.target.src;
				photo.src = srcgo;
			}
			a.classList.add('active-image');
		}
	}

})

// task 5

let buttun = document.querySelector('#sort');
buttun.addEventListener('click', sortName);

function sortName() {
	let spans = document.querySelectorAll('.name');
	let arr = [];
	for (let par of spans) {
		arr.push([par.parentNode.firstElementChild.innerHTML, par.parentNode.lastElementChild.innerHTML]);
	}
	arr.sort();
	for (let i = 0; i < spans.length; i++) {
		spans[i].innerHTML = arr[i][0];
		spans[i].parentNode.lastElementChild.innerHTML = arr[i][1];
	}
}
