let images = document.querySelectorAll('lazy-img');
for (let i = 0, len = images.length; i < len; i++) {
  let frame = images[i];
  try {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        frame.outerHTML = frame.outerHTML.replace(/lazy-img/g, "img");
        observer.disconnect();
      }
    }, {threshold: [0], rootMargin: '0px 0px ' + document.documentElement.clientHeight + 'px'});
    observer.observe(frame);
  } catch (e) {
    frame.outerHTML = frame.outerHTML.replace(/lazy-img/g, "img");
  }
}
