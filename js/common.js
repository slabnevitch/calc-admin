(function() {

	// ibg class
		if('objectFit' in document.documentElement.style === false){
		  Array.prototype.forEach.call(document.querySelectorAll('._fit'), function(el){

		    var image = el.querySelector('img');
		    el.style.backgroundImage = 'url("'+image.src+'")';
		    el.classList.add('ibg');
		    el.classList.remove('_fit');
 		 });
		}
	// End ibg class

	// micromodal
		if(document.querySelector('.modal') !== null){
		console.log('if cond!')
			MicroModal.init({
				openTrigger: 'data-custom-open', 
				closeTrigger: 'data-custom-close',
				openClass: 'is-open', 
				disableFocus: true, 
				awaitOpenAnimation: true
			});		
		}
	// END micromodal

	// objec popup handler
	if(document.querySelector('.add-object-modal .admin-form') !== null){
		document.getElementById('open-color-form').onclick = function() {
			console.log(this)
			this.closest('.modal__content').classList.add('color-open')
		}
		document.getElementById('close-color-form').onclick = function() {
			this.closest('.modal__content').classList.remove('color-open')
		}
	}
	// END objec popup handler
	
})();

