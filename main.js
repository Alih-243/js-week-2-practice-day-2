const getSearch = async () => {
    document.getElementById('results').innerHTML = ``;
    const query = document.getElementById('search-box').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.meals == null) {
        document.getElementById('not-found').classList.add('d-block');
        document.getElementById('not-found').classList.remove('d-none');
        document.getElementById('card-detail').classList.add('d-none');
        document.getElementById('card-detail').classList.remove('d-block');
    }
    else {
        document.getElementById('show-detail').innerHTML = ``;
        document.getElementById('card-detail').classList.add('d-block');
        document.getElementById('card-detail').classList.remove('d-none');
        document.getElementById('not-found').classList.add('d-none');
        document.getElementById('not-found').classList.remove('d-block');
        data.meals.forEach(food => {
            const card = document.createElement('div');
            card.addEventListener('click', async () => {
                const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${food.idMeal}`;
                const res = await fetch(url);
                const data = await res.json();
                // console.log(data);
                document.getElementById('show-detail').innerHTML =
                    `
                    <img src="${food.strMealThumb}" class="" alt="...">
                    <div>
                        <h3 class="text-warning">${food.strMeal}</h3>
                        <h4 class="">Ingredients</h4>
                        <li>${food.strIngredient1}</li>
                        <li>${food.strIngredient2}</li>
                        <li>${food.strIngredient3}</li>
                        <li>${food.strIngredient4}</li>
                        <li>${food.strIngredient5}</li>
                        <li>${food.strIngredient6}</li>
                    </div>
                    `;
            });
            card.classList.add('card');
            card.style.width = '300px';
            card.innerHTML = `
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="text-center">${food.strMeal}</h4>
            </div>`;
            document.getElementById('results').appendChild(card);
        });
    }
};

async function showDetail(id) {

}