caurrentValue = document.querySelector('#currentValue');
maxValue = document.querySelector('#maxValue');
buttonShow = document.querySelector('#buttonShow');
buttonClouse = document.querySelector('.target-indicator__clouse-btn');
targetIndicatorNumber = document.querySelector('.target-indicator-block-text');
targetIndicator = document.querySelector('.popup');
targetIndicatorTotalMax = document.querySelector('.block-indicator__bottom');
targetIndicatorTotalCurrent = document.querySelector('.block-indicator__current');
targetIndicatorProgressWrapper = document.querySelector('.block-indicator__progress-wrapper');

buttonShow.addEventListener('click', (event) => {
  event.preventDefault();

  if (Number(caurrentValue.value) <= Number(maxValue.value)) {
    targetIndicator.style.display = 'block';

    targetIndicatorNumber.textContent = `You need $${Number(maxValue.value) - Number(caurrentValue.value)} 
    more to reach your target.`;

    targetIndicatorTotalMax.textContent = `$${Number(maxValue.value)}`;
    targetIndicatorTotalCurrent.textContent = ` $${Number(caurrentValue.value)}`;

    const indicatorProgress = document.createElement('div');
    indicatorProgress.classList.add('block-indicator__progress');
    targetIndicatorProgressWrapper.appendChild(indicatorProgress);

    indicatorProgress.style.width = Math.round(Number((caurrentValue.value * 100) / Number(maxValue.value))) + '%';

    let width = document.querySelector('.block-indicator__progress-wrapper').offsetWidth;
    let currentWidth = document.querySelector('.block-indicator__current').offsetWidth;
    let step = maxValue.value;
    let pxInStep = width / step;
    let offsetX = caurrentValue.value * pxInStep;
    let left = Math.round(offsetX - currentWidth / 2);

    document.querySelector('.block-indicator__current').style.left = left + 'px';

    buttonClouse.addEventListener('click', (ev) => {
      ev.preventDefault();
      targetIndicator.style.display = 'none';
      document.querySelector('.block-indicator__progress').remove();
    });
  } else {
    alert('Wrong initial options');
    return;
  }
});
