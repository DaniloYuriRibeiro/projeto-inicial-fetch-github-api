const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `  <div class="info">
                                            <img src="${user.avatarUrl} alt="Foto do perfil do usuário">
                                            <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado 😭"}</h1>
                                                <p>${user.bio ?? "Não possui bio    cadastrada 😭"}</p>
                                                <p>👥Seguidores:${user.followers}</p>
                                                <p>👥Seguindo:${user.following}</p>
                                            </div>
                                        </div>`

        let eventItens = ""
        user.events.forEach((event) => {
            if (event.type === "CreateEvent" || event.type === "PushEvent") {
                if(event.payload.commits === undefined) {
                eventItens += `<li><span>${event.repo.name}</span> - sem mensagem, devido evento ser do tipo: <span>${event.type}</span>.</li>`  
              } else {
                eventItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}.</li>`
              }
            }})   
                
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>         
                                            </div>`
        }

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}
                                                                        <ul class="repo-infos">
                                                                            <li>🍴${repo.forks_count}</li>
                                                                            <li>⭐${repo.stargazers_count}</li>
                                                                            <li>👀${repo.watchers_count}</li>
                                                                            <li>👨‍💻${repo.language ?? '❌'}</li>
                                                                        </ul>
                                                                    </a>                                                       
                                                                </li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul> 
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}
export { screen }