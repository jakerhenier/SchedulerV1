let webBody = document.querySelector('body');
let addButton = document.getElementById('add-button');
let closeButton = document.getElementById('close-button');
let descriptionModal = document.getElementById('post-description');
let addingForm = document.getElementById('compose-post');
let confirmPopup = document.getElementById('confirm-discard');

let listItem = document.getElementsByClassName('list-item');
let modalItems = document.getElementsByClassName('modal-pages');

let yesClick = document.getElementById('yes');
let noClick = document.getElementById('no');

addButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeModal);
for (let x = 0; x < listItem.length; x++) listItem[x].addEventListener('click', openDescription);

function checkOpenModal() {
	for (let x = 0; x < modalItems.length; x++) {
		if (modalItems[x].style.display == 'block') {
			modalItems[x].style.display = 'none';
		}
	}
	closeButton.style.display = 'block';
}

function openForm() {
	let addForm = document.getElementById('adding-form');
    
    checkOpenModal();
    if(addForm.style.display = 'none') {
        addForm.style.display = 'block';
    }
 	// location.href = "forms/add.html";
}

function openDescription() {
	checkOpenModal();
	descriptionModal.style.display = 'block';
}

function checkForInput() {
	for (let x = 0; x < addingForm.length; x++) {
		if (addingForm[x].value != "") {
			confirmPopup.style.display = 'grid';

			yesClick.onclick = () => {
				for (let x = 0; x < modalItems.length; x++) {
		        	modalItems[x].style.display = 'none';
		    	}
		    	closeButton.style.display = 'none';
		    	confirmPopup.style.display = 'none';

		    	for (let x = 0; x < addingForm.length; x++) {
		    		addingForm[x].value = '';
		    	}
			}

			noClick.onclick = () => {
				confirmPopup.style.display = 'none';
			}
		}
	}
}

function closeModal() {
	// for (let x = 0; x < addingForm.length; x++) {
	// 	if (addingForm[x].value != "") {
	// 		confirmPopup.style.display = 'grid';

	// 		yesClick.onclick = () => {
	// 			for (let x = 0; x < modalItems.length; x++) {
	// 	        	modalItems[x].style.display = 'none';
	// 	    	}
	// 	    	closeButton.style.display = 'none';
	// 	    	confirmPopup.style.display = 'none';

	// 	    	for (let x = 0; x < addingForm.length; x++) {
	// 	    		addingForm[x].value = '';
	// 	    	}
	// 		}

	// 		noClick.onclick = () => {
	// 			confirmPopup.style.display = 'none';
	// 		}
	// 	}
	// }
	checkForInput();

	for (let x = 0; x < modalItems.length; x++) {
    	modalItems[x].style.display = 'none';
	}
	closeButton.style.display = 'none';
	confirmPopup.style.display = 'none';
}