export class GameDetails {

    async fetchDetails(id){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8a40e9deb8mshead6bb65a076befp1c80e4jsne6e632c77157',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                let message = await response.json();
                console.log(message['status_message']);
                console.log('bad request');
            }
            else {
                return response.json();
            }

        } catch (error) {
            console.error(error);
        }
    }

    showGameDetails(data){
        const details = document.querySelector('.details');
        details.children[0].innerHTML = ` <div class="game">
                                    <div class="game-header d-flex justify-content-between pb-4">
                                        <h2>Details Game</h2>
                                        <span id="close-details"><i class="fa-solid fa-x"></i></span>
                                    </div>
                                    <div class="row gy-4 gx-5">
                                        <div class="col-lg-5">
                                            <img src="${data['thumbnail']}" class="w-100 rounded" alt="">
                                        </div>
                                        <div class="col-lg-7">
                                            <h2 class="mb-4">${data.title}</h2>
                                            <ul class="list-unstyled">
                                                <li class="mb-3">Category :
                                                    <span class="badge bg-info text-black">${data.genre}</span>
                                                </li>
                                                <li class="mb-3">platform :
                                                    <span class="badge bg-info text-black">${data['platform']}</span>
                                                </li>
                                                <li class="mb-3">status :
                                                    <span class="badge bg-info text-black">live</span>
                                                </li>
                                            </ul>
                                            <p class="mb-5">${data['description']}</p>
                                            <button class="btn btn-outline-warning">
                                                <a href="${data['game_url']}" class="no-decoration text-white"> show game</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>`;

        document.body.classList.add('overflow-hidden')
        details.classList.add(...['w-100', 'h-100']);
        details.classList.replace('py-0', 'py-5');
        details.classList.replace('px-0', 'px-3');
        details.classList.replace('opacity-0', 'opacity-100');
        details.classList.replace('rounded-circle', 'rounded-0');
        details.children[0].classList.replace('opacity-0', 'opacity-100');
        details.style.cssText = 'transition: 0.7s;'
        details.children[0].style.cssText = 'transition: 0.7s 1s; transform : translatey(0px)'
        
        setTimeout(()=>{
            details.classList.replace('overflow-hidden', 'overflow-y-auto');
        }, 1000)
        
        const closeGd = document.querySelector('#close-details');
        
        closeGd.addEventListener('click', function(){
            document.body.classList.remove('overflow-hidden');
            details.style.cssText = 'transition: 0.7s 1s;'
            details.children[0].style.cssText = 'transition: 0.7s; transform : translatey(100px)'
            details.classList.remove(...['w-100', 'h-100']);
            details.classList.replace('py-5', 'py-0');
            details.classList.replace('overflow-y-auto', 'overflow-hidden');
            details.classList.replace('px-3', 'px-0');
            details.classList.replace('opacity-100', 'opacity-0');
            details.classList.replace('rounded-0', 'rounded-circle');
            details.children[0].classList.replace('opacity-100', 'opacity-0');
        })


    }
}