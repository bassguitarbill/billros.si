const SEASONAL_COLORS = {
  spring: {
    bg:     '#76BA99',
    logo:   '#CED89E',
    shadow: '#ADCF9F',
  },
  summer: {
    bg:     '#0078AA',
    logo:   '#F6F6F6',
    shadow: '#F2DF3A',
  },
  autumn: {
    bg:     '#9D5C0D',
    logo:   '#F7D08A',
    shadow: '#E5890A',
  },
  winter: {
    bg:     '#242F9B',
    logo:   '#9BA3EB',
    shadow: '#646FD4',
  },
}

function setSeason(season) {
  document.querySelector(':root').style.setProperty('--background-color',   SEASONAL_COLORS[season].bg);
  document.querySelector(':root').style.setProperty('--logo-color',         SEASONAL_COLORS[season].logo);
  document.querySelector(':root').style.setProperty('--logo-shadow-color',  SEASONAL_COLORS[season].shadow);
  localStorage.setItem('season', season);
}

setSeason(localStorage.getItem('season') || 'spring');
