document.addEventListener("DOMContentLoaded", function () {
   getBanners();
});

function getBanners() {
  const path = 'http://127.0.0.1:5500/dataFiles/bannerDatas.json';

  fetch(path)
    .then(response => response.json())
    .then(JSarray => {
      JSarray.forEach(data => {
      
      let bnr = document.createElement('div');
      bnr.className = 'bnr';

      let bnrImg = document.createElement('img');
      bnrImg.className='bnrImg';
      bnrImg.src = data.imgSrc;

      let content = document.createElement('div');
      content.className = 'content';

      let bnr_title = document.createElement('p');
      bnr_title.className = 'bnr_title';
      bnr_title.textContent = data.title;

      let bnr_subtitle = document.createElement('p');
      bnr_subtitle.className = 'bnr_subtitle';
      bnr_subtitle.textContent = data.description;

      content.append(bnr_title, bnr_subtitle);
      bnr.append(bnrImg, content);

      let banners = document.querySelector('.banners');
      banners.appendChild(bnr);

    })
    
    let ShopNowBtn = document.createElement('button');
      ShopNowBtn.className = 'buyNow';
      ShopNowBtn.textContent = 'Shop Now';
    let banners = document.querySelector('.banners');
    banners.lastChild.appendChild(ShopNowBtn);
  })
    .catch(error => {
      console.error('JSON okunamadı:', error);
      return null;
    });
}