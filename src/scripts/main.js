import 'normalize.css';
import '../css/loco-base.css';
import '../css/style.scss';
import '../css/clock.scss';

import topbar from 'topbar';
import { query, queryAll } from './utils';
import { hideClock, showClock } from './clock';

topbar.show();
topbar.config({
  shadowColor: 'rgba(0, 0, 0, .1)',
});

const loadingElement = query`#loading`;
const heroSection = query`#hero`;
const header = query`header`;

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

const tech_stack = query`.tech-stack`;
const tech_stack_svgs = queryAll`.tech-stack svg`;
const tech_name_div = query`.tech-stack-name`;
const tech_mirror_shadow = query`.mirror-shadow`;

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
    hideClock();
  }
}

function showMirrorShadow(name) {
  const selected_tech_svg = query(`.tech-stack svg[data-techname="${name}"]`);
  tech_mirror_shadow.innerHTML = selected_tech_svg.outerHTML;
  tech_mirror_shadow.style.setProperty('--origin-x', '0px');
  tech_mirror_shadow.style.setProperty('--origin-y', '-600%');
  tech_mirror_shadow.style.setProperty('--origin-scale', '10');
}

function onTechMouseLeave() {
  return (event) => {
    const t = tech_name_div;
    t.style.display = "none";
    console.log(event);
    const tech_width = tech_stack.getBoundingClientRect().width;
    const translatexCalc = `calc(${event.target.getBoundingClientRect().left}px - ${event.target.parentElement.offsetLeft}px - ${tech_width / 2}px + ${tech_mirror_shadow.getBoundingClientRect().width/20}px)`;
    tech_mirror_shadow.style.setProperty('--origin-x', translatexCalc);
    tech_mirror_shadow.style.setProperty('--origin-y', '0px');
    tech_mirror_shadow.style.setProperty('--origin-scale', '0');
    tech_stack_svgs.forEach(svg => blurElement(svg, false));
    showClock();
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
