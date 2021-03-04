window.onload = function() {
  
	var contextMenuButtonElem 	= document.getElementById('context-menu-button'),
    contextMenuUlElem	= document.getElementById('navigation'),
    bodyElem = document.getElementById('body'),
    headerIconsElem = document.getElementById('js-header-icons');

    bodyElem.classList.remove('no-js');

	var onContextMenuBtnClick = function() {
    headerIconsElem.classList.toggle('open-menu');

    if ( !headerIconsElem.classList.contains('open-menu') ) {
      contextMenuButtonElem.setAttribute('aria-label', 'открыть меню');
    } else {
      contextMenuButtonElem.setAttribute('aria-label', 'закрыть меню');
    }
  };

	contextMenuButtonElem.addEventListener('click', onContextMenuBtnClick);
};
