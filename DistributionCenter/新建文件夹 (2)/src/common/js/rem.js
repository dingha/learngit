(function() {
  function resize() {
    const html = document.documentElement;
    const width = html.clientWidth; //计算移动端的宽度
    html.style.fontSize = `${width / 7.5}px`;
  }

  window.addEventListener("resize", resize);

  resize();
})();
