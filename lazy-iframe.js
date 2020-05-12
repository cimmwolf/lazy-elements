let frames = document.querySelectorAll('lazy-iframe');
for (let i = 0, len = frames.length; i < len; i++) {
  let frame = frames[i];
  try {
    let observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        frame.outerHTML = frame.outerHTML.replace(/lazy-iframe/g, "iframe");
        observer.disconnect();
      }
    }, {threshold: [0], rootMargin: '0px 0px ' + document.documentElement.clientHeight + 'px'});
    observer.observe(frame);
  } catch (e) {
    frame.outerHTML = frame.outerHTML.replace(/lazy-iframe/g, "iframe");
  }
}
