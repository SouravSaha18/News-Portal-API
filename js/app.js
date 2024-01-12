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
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    data.forEach(x => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('mb-4');
        let y;
        if (x.author.published_date !== null) {
            const [datePart] = x.author.published_date.split(" ");
            const parsedDate = new Date(datePart);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const formattedDate = parsedDate.toLocaleDateString('en-US', options);
            y = formattedDate;
        }
        else {
            y = "No date";
        }
        const [first, rest] = x.details.split("...");
        div.innerHTML = `
        <div class="row g-0">
            <div class="col-12 col-md-4">
                <img src="${x.thumbnail_url}" class="img-fluid rounded m-3" alt="...">
            </div>
            <div class="col-12 col-md-8">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${x.title}</h5>
                    <p class="card-text">${first.slice(0, 200)}...</p>
                    <p class="card-text">${first.slice(201, 300)}...</p>
                </div>
                <div class="d-flex justify-content-around">
                    <div class="d-flex">
                        <div>
                            <img src="${x.author.img}" class="img-fluid  author-img rounded-circle" alt="">
                        </div>
                        <div>
                            <p class="card-title fs-6 ps-2">${x.author.name}</p>
                            <p class="card-text fs-6 ps-2">${y}</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-eye-fill me-2" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path
                                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                        <p class="card-text">${x.total_view}</p>
                    </div>
                    <div class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-star-fill me-2" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                            class="bi bi-star-half" viewBox="0 0 16 16">
                            <path
                                d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                        </svg>
                    </div>
                    <div>
                        <button type="button" onclick="loadDetails()" class="btn btn-light"><svg
                                xmlns="http://www.w3.org/2000/svg" width="26" height="25" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16" style="color: #2c2fd6;">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
        newsContainer.appendChild(div);
    });
}

loadNav();