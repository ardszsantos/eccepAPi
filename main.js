const username = 'ardszsantos';
const url = `https://api.github.com/users/${username}`;

fetch(url)
    .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar dados do GitHub');
        return res.json();
    })
    .then(user => {
        // seleciona os elementos
        const avatarEl    = document.querySelector('.profile-avatar');
        const nameEl      = document.querySelector('.profile-name');
        const loginEl     = document.querySelector('.profile-username');
        const reposEl     = document.getElementById('repos');
        const followersEl = document.getElementById('seguidores');
        const followingEl = document.getElementById('seguindo');
        const linkEl      = document.querySelector('.profile-link');

        // preenche
        avatarEl.src       = user.avatar_url;
        avatarEl.alt       = `${user.login} avatar`;
        nameEl.textContent = user.name || user.login;
        loginEl.textContent= `@${user.login}`;
        reposEl.textContent     = user.public_repos;
        followersEl.textContent = user.followers;
        followingEl.textContent = user.following;
        linkEl.href             = user.html_url;
    })
    .catch(err => {
    console.error(err);

    });
