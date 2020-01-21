
let data =
    [
      {
        "banner": "https://oboi.ws/wallpapers/17_8319_oboi_nochnoj_gorod_1920x1080.jpg",
      },
      {
        "banner": "https://sun9-29.userapi.com/c543100/v543100284/54bb2/uhaq8dKWtiI.jpg",
      },
      {
        "banner": "https://s1.1zoom.ru/big3/822/382314-svetik.jpg",
      }
    ];

let menuList =
    [
      {
        "name": "Автомобили",
        "url": "#",
        "subMenu":
            [
              {
                "name": "Отечественные",
                "url": "#",
              },
              {
                "name": "Иномарки",
                "url": "#",
              },
            ]
      },
      {
        "name": "Бытовая техника",
        "url": "#",
        "subMenu":
            [
              {
                "name": "TV",
                "url": "#"
              }
            ]
      },
      {
        "name": "Мобильная техника",
        "url": "#",
        "subMenu":
            [
              {
                "name": "Iphone",
                "url": "#"
              }
            ]
      },
      {
        "name": "Компьютеры",
        "url": "#",
        "subMenu":
            [
              {
                "name": "Ноутбуки",
                "url": "#"
              },
              {
                "name": "Мониторы",
                "url": "#"
              }
            ]
      },
      {
        "name": "Недвижимость",
        "url": "#",
        "subMenu":
            [
              {
                "name": "Дома",
                "url": "#"
              },
              {
                "name": "Квартиры",
                "url": "#"
              },
              {
                "name": "Участки",
                "url": "#"
              }
            ]
      }
    ];


function main(data, menuList)
{
  let createMenu = document.querySelector('NAV[class="createMenu"]');
  let menuNav = document.querySelector('DIV[class="menuNavInner"]');

  function init()
  {
    new Menu(menuList, createMenu, menuNav);
    new Slider(data);
    document.querySelector('SPAN[class="contactsFeedback"]').addEventListener('click', contactsFeedback)
  }


  function contactsFeedback()
  {
    new Feedback();
  }


  init();
}


function Menu(menu, createMenu, menuNav)
{
  let navigation = [''];
  let flagLevelFirst = null;
  let flagLevelSecond = null;


  function init()
  {
    createMenu.appendChild(menuCreator(menu));
    createMenu.addEventListener('click', subMenuDisplay);
    document.querySelector('SPAN[class="home"]').addEventListener('click', home);
  }

  function menuCreator(menu)
  {
    let list = document.createElement('ul');

    menu.forEach((item) =>
    {
      let list_item = document.createElement('li');
      let link = document.createElement('a');
      let text = document.createTextNode(item.name);

      // link.setAttribute('href', item.url);
      list_item.setAttribute('class', 'dropNone');

      list_item.appendChild(link);
      link.appendChild(text);
      list.appendChild(list_item);

      if(item.subMenu)
      {
        list_item.setAttribute('class', 'dropdown');
        list_item.appendChild(menuCreator(item.subMenu));
      }
    });
    return list
  }


  function getLevel(el)
  {
    let level = 0, current = null;

    while(current = el.closest('ul'))
    {
      level++;

      if(current === createMenu)
        break;
      else
        el = current.parentNode;
    }

    return level;
  }


  function subMenuDisplay (event)
  {
    let targetDropdown = event.target.closest('li');

    if(event.target.tagName === 'A' && targetDropdown.getAttribute('class') === 'dropdown')
    {
      if(event.target.closest('ul').querySelector('LI[class="dropdownShow"]'))
      {
        event.target.closest('ul').querySelector('LI[class="dropdownShow"]').setAttribute('class', 'dropdown');
      }
      targetDropdown.setAttribute('class', 'dropdownShow');
    }
    else if(event.target.tagName === 'A' && targetDropdown.getAttribute('class') === 'dropdownShow')
    {
      targetDropdown.setAttribute('class', 'dropdown');
    }
    else if(event.target.tagName === 'A' && targetDropdown.getAttribute('class') === 'dropNone')
    {
      if(event.target.closest('ul').querySelector('LI[class="dropdownShow"]'))
      {
        event.target.closest('ul').querySelector('LI[class="dropdownShow"]').setAttribute('class', 'dropdown');
      }
    }

    showMenuNav(event);
  }


  function showMenuNav (event)
  {
    let target = event.target;


    if(getLevel(target) === 1 && target.tagName === 'A')
    {
      navigation[0] = event.target.closest('a').text;

      if(flagLevelFirst !== null)
      {
        flagLevelFirst.style.borderBottom = '';
      }
      if(flagLevelSecond !== null)
      {
        flagLevelSecond.style.borderBottom = '';
      }

      event.target.closest('a').style.borderBottom = '1px solid #777777';

      if(navigation.length > 1)
      {
        delete navigation[1];
        navigation.length = 1;
      }

      flagLevelFirst = event.target.closest('a');
    }
    else if(getLevel(target) === 2 && target.tagName === 'A')
    {
      navigation[1] = event.target.closest('a').text;

      if(flagLevelSecond !== null)
      {
        flagLevelSecond.style.borderBottom = '';
      }

      event.target.closest('a').style.borderBottom = '1px solid #777777';

      if(navigation.length > 2)
      {
        delete navigation[2];
        navigation.length = 2;
      }

      flagLevelSecond = event.target.closest('a');
    }

    if(navigation.length > 1)
    {
      menuNav.innerHTML = '<span>' + navigation[0] +'</span>&nbsp / &nbsp' + navigation[1];
    }
    else
      menuNav.innerHTML = navigation.join(' / ');
  }


  function home()
  {
    if(document.querySelector('LI[class="dropdownShow"]'))
    {
      document.querySelector('LI[class="dropdownShow"]').setAttribute('class', 'dropdown');
    }


    let menu = document.querySelector('NAV[class="createMenu"]');

    menu.querySelectorAll('A').forEach((item) =>
      {
        item.style.borderBottom = '';
      });

    menuNav.innerHTML = '';
  }


  init();
}


function Slider(data)
{
  let numberImage = 0;
  let rightButton;
  let leftButton ;
  let slider;
  let photo;

  function init()
  {
    createSlider();
    setTimeout(function(){imageShow(true, 'right')}, 3000);
    rightButton.addEventListener('click', right);
    leftButton.addEventListener('click', left);
  }


  function createSlider()
  {
    slider = document.querySelector('DIV[class="slider"]');

    slider.innerHTML =
        '<div class="containerButton"><div class = "containerLeft"><img src="../../img/left.png"></div><div class = "containerRight"><img src="../../img/right.png"></div></div>' +
        '<div class="containerDivImg"><img id="sliderImg" class="sliderImg" src="' + data[0].banner + '" alt=""></div>';

    setTimeout(function(){document.getElementById('sliderImg').setAttribute('class', 'sliderImgFade')},1000);

    rightButton = document.querySelector('DIV[class="containerRight"]');
    leftButton = document.querySelector('DIV[class="containerLeft"]');
    photo = document.getElementById('sliderImg');
  }

  let sliderImage = () =>
  {
    photo.setAttribute('src', data[numberImage].banner);
    photo.setAttribute('data-src', numberImage);
    setTimeout(function(){photo.setAttribute('class', 'sliderImg')},100);
    setTimeout(function(){photo.setAttribute('class', 'sliderImgFade')},4000);
  };
  function imageShow(value, arrow)
  {
    if(arrow === 'right')
    {
      if(numberImage === data.length-1)
      {
        numberImage = 0
      }
      else
      {
        numberImage++
      }
    }
    else if(arrow === 'left')
    {
      if(numberImage === 0)
      {
        numberImage = numberImage = data.length-1
      }
      else
      {
        numberImage--
      }
    }


    if(value)
    {
      sliderImage();
      setTimeout(function(){imageShow(true, 'right');}, 7000);
    }
    else
    {
      sliderImage();
    }
  }


  function right()
  {
      imageShow(false, 'right');
  }


  function left()
  {
    imageShow(false, 'left');
  }



  init();
}

function Feedback()
{
  let widthDefaultScrollBar;
  let darkLayer;
  let windowLayer;

  function init()
  {
    createDarkLayer();
    document.querySelector('DIV[class="closeFeedback"]').addEventListener('click', closeWindowFeedback);
    document.getElementById('button').addEventListener('click', checkInput)
  }


  function checkInput()
  {
    if(document.getElementById('name').value.length > 0)
    {
      document.getElementById('name').setAttribute('class','');
      document.getElementById('name').placeholder = ''
    }
    else if(document.getElementById('name').value.length === 0)
    {
      document.getElementById('name').setAttribute('class','trueInput');
      document.getElementById('name').placeholder = 'Введите имя'
    }

    if(document.getElementById('number').value.length > 0)
    {
      document.getElementById('number').setAttribute('class','');
      document.getElementById('number').placeholder = ''
    }
    else if(document.getElementById('number').value.length === 0)
    {
      document.getElementById('number').setAttribute('class','trueInput');
      document.getElementById('number').placeholder = 'Введите номер'
    }

    if(document.getElementById('email').value.length > 0)
    {
      document.getElementById('email').setAttribute('class','');
      document.getElementById('email').placeholder = ''
    }
    else if(document.getElementById('email').value.length === 0)
    {
      document.getElementById('email').setAttribute('class','trueInput');
      document.getElementById('email').placeholder = 'Введите email'
    }
  }


  function createDarkLayer()
  {
    widthDefaultScrollBar = window.innerWidth - document.querySelector('html').getBoundingClientRect().width;
    darkLayer = document.createElement('div');

    darkLayer.setAttribute('class', 'shadingWhite');
    setTimeout(function () {darkLayer.setAttribute('class', 'shadingDark')}, 100);

    document.body.appendChild(darkLayer);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = hiddenDefaultScrollBar(getComputedStyle(document.body).paddingRight, 10) + widthDefaultScrollBar + 'px';
    createFeedback();
  }


  function hiddenDefaultScrollBar (parsedPaddingRight, base)
  {
    let parsed = parseInt(parsedPaddingRight, base);
    if (isNaN(parsed))
    {
      return 0
    }
    return parsed
  }


  function createFeedback ()
  {
    windowLayer = document.createElement('div');

    windowLayer.setAttribute('class', 'windowLayer');
    document.body.appendChild(windowLayer);

    windowLayer.innerHTML =
        '<div class="feedbackOuter"><div class="feedbackInner"><div class="feedbackForm"><div><span>ОБРАТНАЯ СВЯЗЬ</span></div><div><label>Ваше имя *</label><input id="name"></div><div><label>Телефон *</label><input id="number"></div><div><label>Email *</label><input id="email"></div><div><label>Сообщение</label><textarea></textarea></div><div><button id="button">ОТПРАВИТЬ</button></div></div><div class="closeFeedback"><svg height="25px" viewBox="0 0 376.49067 376.49067" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="m316.457031 376.46875c-9.554687 0-19.132812-3.648438-26.429687-10.921875l-101.78125-101.761719-101.761719 101.761719c-14.613281 14.589844-38.3125 14.589844-52.90625 0l-22.632813-22.636719c-14.59375-14.589844-14.59375-38.3125 0-52.90625l101.757813-101.757812-101.757813-101.761719c-14.59375-14.613281-14.59375-38.335937 0-52.90625l22.632813-22.632813c14.570313-14.570312 38.292969-14.59375 52.886719 0l101.78125 101.757813 101.757812-101.757813c14.636719-14.59375 38.335938-14.59375 52.90625 0l22.636719 22.632813c14.589844 14.59375 14.589844 38.316406 0 52.90625l-101.761719 101.761719 101.761719 101.757812c14.589844 14.59375 14.589844 38.316406 0 52.90625l-22.636719 22.636719c-7.292968 7.273437-16.871094 10.921875-26.453125 10.921875zm-128.210937-151.316406c4.246094 0 8.320312 1.683594 11.304687 4.691406l113.066407 113.066406c2.09375 2.070313 5.589843 2.070313 7.660156 0l22.632812-22.632812c2.09375-2.070313 2.070313-5.589844 0-7.679688l-113.066406-113.046875c-6.25-6.25-6.25-16.382812 0-22.632812l113.066406-113.066407c2.070313-2.070312 2.09375-5.589843 0-7.660156l-22.632812-22.613281c-2.089844-2.070313-5.566406-2.070313-7.679688 0l-113.046875 113.066406c-5.992187 5.996094-16.617187 5.996094-22.632812 0l-113.066407-113.066406c-2.089843-2.070313-5.589843-2.070313-7.660156 0l-22.613281 22.636719c-2.089844 2.066406-2.070313 5.585937 0 7.679687l113.066406 113.042969c6.25 6.25 6.25 16.386719 0 22.636719l-113.066406 113.066406c-2.070313 2.070313-2.089844 5.589844 0 7.65625l22.636719 22.636719c2.089844 2.070312 5.566406 2.070312 7.679687 0l113.042969-113.066406c2.988281-3.03125 7.0625-4.714844 11.308594-4.714844zm0 0"/></svg></div>';
  }


  function closeWindowFeedback()
  {
    document.body.style.paddingRight = hiddenDefaultScrollBar(getComputedStyle(document.body).paddingRight, 10) - widthDefaultScrollBar + 'px';
    document.body.style.overflow = '';
    document.querySelector('DIV[class="closeFeedback"]').removeEventListener('click', closeWindowFeedback);
    darkLayer.parentNode.removeChild(darkLayer);
    windowLayer.parentNode.removeChild(windowLayer);
  }


  init();
}



document.addEventListener("DOMContentLoaded", function () {main(data, menuList)});