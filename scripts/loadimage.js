function isVisible(div){
    let coords = div.getBoundingClientRect();

      let windowHeight = document.documentElement.clientHeight;

      let extendedTop = -windowHeight;

      let topVisible = coords.top > extendedTop;

      return topVisible;
}

function showVisible() {
    for (let div of document.getElementsByClassName("portfolio_content_image")) {
      let src = div.dataset.src;

      if (isVisible(div)) {
        div.style.backgroundImage = src;
      }
    }
}
window.onscroll = showVisible;