window.addEventListener('load', () => {
  const btnsDesctop = document.querySelectorAll('.home .home__content .home__menu ul li')
  const btnsMob = document.querySelectorAll('.mobMenu ul li')
  const section = document.querySelector('.video')
  const videoWrap = document.querySelector('.video .video__overlay .video__frameWrap')

  btnsDesctop[2].addEventListener('click', () => {
    console.log(2);
    section.classList.add('video_active');
    videoWrap.classList.add('video_active');
    // console.log(`${videoWrap.querySelector('iframe').getAttribute('data-src')}`)
    videoWrap.querySelector('iframe').src = `${videoWrap.querySelector('iframe').getAttribute('data-src')}`;
    [...btnsDesctop].forEach((btn, ind) => {
      ind === 2 ? btn.classList.add('button_active') : btn.classList.remove('button_active')
    })
  })

  section.addEventListener('click', () => {
    section.classList.remove('video_active')
    videoWrap.classList.remove('video_active');
    btnsDesctop[0].classList.add('button_active')
    btnsDesctop[2].classList.remove('button_active')
  })
})