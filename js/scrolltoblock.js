const menuLinks = document.querySelectorAll("menu__link[data-goto]");


	function onMenuLinckClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
			if(menuLinks.length > 0) {
	menuLinks.forEach(element =>{
		menuLink.addEventListener("click", onMenuLinckClick);
	});
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}