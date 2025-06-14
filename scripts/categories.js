const path = 'http://127.0.0.1:5500/dataFiles/categories.json';

let categories = document.querySelector('.container_categories .categories');


fetch(path)
    .then(response => response.json())
    .then(JSarray => {
        JSarray.forEach(data => {

            let categoryCard = document.createElement('div');
            categoryCard.className = 'categoryCard';

            let categoryImg = document.createElement('img');
            categoryImg.className = 'categoryImg';
            categoryImg.src = data.icon;

            let categoryName = document.createElement('p');
            categoryName.className = 'categoryName';
            categoryName.textContent = data.name;

            categoryCard.append(categoryImg, categoryName);
            categories.appendChild(categoryCard);
        })


    })
    .catch(error => {
        console.error('JSON okunamadı:', error);
        return null;
    });