/*jshint esversion:6*/
const addHomeContent = function() {
	const mainSection = document.createElement('section');
	mainSection.classList.add('section-content');
	mainSection.classList.add('section-content_flex-direction_column');
	mainSection.innerHTML = `
		<h2 class="h2 home__h2">Simplicity <span class="h2__text-decoration">and</span> Style</h2>
		<p class="home__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		 Quod praesentium quam cum autem quae dicta ullam adipisci minima,
		 aut repellendus eligendi iste nam ab, quos commodi. Sed quisquam, optio ratione.</p>
	`;
	document.body.append(mainSection);
};
export {addHomeContent};