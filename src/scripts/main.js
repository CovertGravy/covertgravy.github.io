import 'normalize.css';
import '../css/loco-base.css';
import '../css/style.scss';

import topbar from 'topbar';

topbar.show();
topbar.config({
  shadowColor: 'rgba(0, 0, 0, .1)',
});

const loadingElement = document.querySelector('#loading');
const heroSection = document.querySelector('#hero');
const header = document.querySelector('header');

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      loadingElement.style.display = 'none';
      topbar.hide();
    }, 1800);
  }
};

const heroSectionObserver = new IntersectionObserver(
  function (entries, heroSectionObserver) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  },
  {
    rootMargin: '-90% 0px 0px 0px',
  }
);

heroSectionObserver.observe(heroSection);

const tech_stack_svgs = document.querySelectorAll('.tech-stack svg');
const tech_name_div = document.querySelector('.tech-stack-name')
tech_stack_svgs.forEach(svg => {
  svg.addEventListener('mouseenter', onTechMouseEnter(svg.dataset.techname));
  svg.addEventListener('mouseleave', onTechMouseLeave);
})

function onTechMouseEnter(name) {
  return () => {
    const t = tech_name_div;
    t.innerText = name;
    t.style.display = "block";
    blurOtherTech(name);
  }
}

function onTechMouseLeave() {
  const t = tech_name_div;
  t.style.display = "none";
  tech_stack_svgs.forEach(svg => blurElement(svg, false));
}

function blurOtherTech(name) {
  tech_stack_svgs.forEach(svg => {
    svg.dataset.techname !== name && blurElement(svg);
  });
}

function blurElement({classList}, apply = true) {
  apply ? classList.add('blur-tech') : classList.remove('blur-tech');
}
