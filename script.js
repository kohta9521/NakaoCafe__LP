function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setHeight();
  window.addEventListener("resize", setHeight);
  

  const verticalSlider = new Swiper(".vertical-slider", {
    direction: "vertical",
    slidesPerView: 1,
    speed: 600,
    mousewheel: true,
    pagination: {
      el: ".vertical-slider__pagination",
      type: "bullets",
      clickable: true,
    },
  });

  let data = [
    { name: '参加人数', value: 30 },
  ];
  
  // しきい値
  let threshold = 100;
  
  for (var variable of data) {
  
    // しきい値からパーセンテージを計算
    variable.percentage = Math.round(variable.value / threshold * 100);
  
    // containerに追加
    document.querySelector('#container').insertAdjacentHTML('beforeend', `<div class="graf">
    <div><span class="data-name">${variable.name}</span></div>
    <div class="graf-bar-bg">
    <div class="graf-bar" id="${variable.name}"><span>${variable.value}</span></div>
    </div></div>`);
    // widthを指定
    document.querySelector('#' + variable.name).style.width = variable.percentage + '%';
  }