import { GameDetails } from "./details.js";

let gd = new GameDetails();


export class Game {
    async fetchApi(categori) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categori}`;
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


    showData(data) {
        const row = document.querySelector('.games .row');
        row.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            row.innerHTML += `<div class="game col-md-6 col-lg-4 col-xl-3 opacity-0" style="transition: 0.5s;">
                        <div class="card h-100 game-card">
                            <div class="card-body text-white">
                                <img src="${data[i].thumbnail}" class="w-100 rounded rounded-bottom-0 mb-4" alt="game cover">
                                <h6 class="card-title d-flex justify-content-between align-items-center">
                                ${data[i].title}
                                    <span class="badge  p-2 ">Free</span>
                                </h6>
                                <p class="card-text text-center fw-bold">
                                ${data[i]['short_description']}
                                </p>
                            </div>
                            <div class="card-footer d-flex justify-content-between fst-italic">
                                <span class="badge ">${data[i].genre}</span>
                                <span class="badge ">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>`;
        }
        
        
        // window.scroll(0, 10);
        Array.from(row.children).forEach((elem, i)=>{
            if(window.scrollY > elem.offsetTop - window.innerHeight + 100){
                elem.classList.replace('opacity-0', 'opacity-100');
            }
        });
            
        window.addEventListener('scroll', function(){
            Array.from(row.children).forEach((elem, i)=>{
                if(this.scrollY > elem.offsetTop - this.innerHeight + 100){
                    elem.classList.replace('opacity-0', 'opacity-100');                    
                }
            });
        });

        document.querySelectorAll('.games .row .game-card').forEach((elem, i)=>{
            elem.addEventListener('click', async function(){
                gd.showGameDetails(await gd.fetchDetails(data[i].id));
            })
        });
    }

}


