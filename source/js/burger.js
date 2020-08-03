window.addEventListener('load', () => {

  const burger = document.querySelector('#burger')
  const burgerLines = burger.querySelectorAll('.burger__line')
  const mobMenu = document.querySelector('#mobMenu')
  const menuItems = mobMenu.querySelectorAll('ul li')

  //-----desktop menu----

  function showMenu() {
    if (!mobMenu.classList.contains('mobMenu_opened')) {
      // console.log('click')
      mobMenu.classList.add('mobMenu_opened');
      [...burgerLines].forEach((line, ind) => {
        line.classList.add(`burger__line_close${ind + 1}`)
      })
    } else {
      hideMenu()
    }
  }

  function hideMenu() {
    // console.log('hideMenu')
    mobMenu.classList.remove('mobMenu_opened');
    [...burgerLines].forEach((line, ind) => {
      line.classList.remove(`burger__line_close${ind + 1}`)
    })
  }

  burger.addEventListener('click', showMenu)

  for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
      hideMenu()
    })
  }

  window.addEventListener('resize', () => {
    hideMenu()
  })

  //------------------------menu1-----------

  // const nectarinLogo = document.querySelector('#logonectarin')

  // function buildLogoAndBurger() {
  //   if (window.innerWidth > 768) {
  //     burger.classList.remove('hideMenuOnMobile')
  //     nectarinLogo.classList.remove('hideMenuOnMobile')
  //   }
  // }

  // let curPosY = 0
  // function menuWatcher() {
  //   if (window.innerWidth <= 768) {
  //     if (curPosY < window.pageYOffset) {
  //       burger.classList.add('hideMenuOnMobile')
  //       nectarinLogo.classList.add('hideMenuOnMobile')
  //       curPosY = window.pageYOffset
  //     } else {
  //       burger.classList.remove('hideMenuOnMobile')
  //       nectarinLogo.classList.remove('hideMenuOnMobile')
  //       curPosY = window.pageYOffset
  //     }
  //   }
  // }

  // // buildLogoAndBurger()
  // window.addEventListener('resize', () => {
  //   // buildLogoAndBurger()
  //   buildLogoAndBurger()
  // })

  // window.addEventListener('scroll', () => {
  //   menuWatcher()
  // })

})