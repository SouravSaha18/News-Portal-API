const loadNav = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => displayNav(data.data.news_category));
}

const displayNav = data => {
    const navCategory = document.getElementById('nav-category');
    data.forEach(cat => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<button onclick="loadNews(${cat.category_id}, '${cat.category_name}')" type="button" class="btn btn-sm btn-light">${cat.category_name}</button>`;
        navCategory.appendChild(div);
    });
}

const loadNews = (id, name) => {
    document.getElementById('name-category').innerText = name;
    fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
        .then(res => res.json())
        .then(data => displayNews(data.data));
}

const displayNews = data => {
    console.log(data);
    document.getElementById('len-category').innerText = data.length;
}

loadNav();