import Rellax from 'rellax'

window.addEventListener('load', () => {
	new Rellax('.rellaxFirstB', {
		speed: (window.innerWidth > 768) ? 4 :
			(window.innerWidth > 560) ? 3 : 2,
		// speed: 6,
		center: false,
		round: true,
		vertical: true,
		horizontal: false
	})

	new Rellax('.rellaxFirstB_buildings', {
		/* speed: (window.innerWidth > 768) ? -2 :
			(window.innerWidth > 560) ? 3 : 2, */
		speed: -2,
		center: false,
		round: true,
		vertical: true,
		horizontal: false
	})
})