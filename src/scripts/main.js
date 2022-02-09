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

const tech_stack = document.querySelector('.tech-stack');
const tech_stack_svgs = document.querySelectorAll('.tech-stack svg');
const tech_name_div = document.querySelector('.tech-stack-name');
const tech_mirror_shadow = document.querySelector('.mirror-shadow');

tech_stack_svgs.forEach(svg => {
  svg.addEventListener('mouseenter', onTechMouseEnter(svg.dataset.techname));
  svg.addEventListener('mouseleave', onTechMouseLeave());
})

function onTechMouseEnter(name) {
  return () => {
    const t = tech_name_div;
    t.innerText = name;
    t.style.display = "block";
    blurOtherTech(name);
    showMirrorShadow(name);
  }
}

function showMirrorShadow(name) {
  const selected_tech_svg = document.querySelector(`.tech-stack svg[data-techname="${name}"]`);
  tech_mirror_shadow.innerHTML = selected_tech_svg.outerHTML;
  tech_mirror_shadow.style.setProperty('--origin-x', '0px');
  tech_mirror_shadow.style.setProperty('--origin-y', '-600%');
  tech_mirror_shadow.style.setProperty('--origin-scale', '10');
}

function onTechMouseLeave() {
  return (event) => {
    const t = tech_name_div;
    t.style.display = "none";
    const tech_width = tech_stack.getBoundingClientRect().width;
    const translatexCalc = `calc(${event.target.getBoundingClientRect().left}px - ${tech_width*2}px)`;
    tech_mirror_shadow.style.setProperty('--origin-x', translatexCalc);
    tech_mirror_shadow.style.setProperty('--origin-y', '0px');
    tech_mirror_shadow.style.setProperty('--origin-scale', '0');
    tech_stack_svgs.forEach(svg => blurElement(svg, false));
  }
}

function blurOtherTech(name) {
  tech_stack_svgs.forEach(svg => {
    svg.dataset.techname !== name && blurElement(svg);
  });
}

function blurElement({classList}, apply = true) {
  apply ? classList.add('blur-tech') : classList.remove('blur-tech');
}
