const info = {
    os: navigator.platform,
    browser: navigator.userAgent,
    language: navigator.language,
    screen: {
        width: window.screen.width,
        height: window.screen.height
    }
};

localStorage.setItem('userInfo', JSON.stringify(info));

const footer = document.getElementById('footer');
const savedInfo = JSON.parse(localStorage.getItem('userInfo'));

footer.innerHTML = `
    <p><b>ОС:</b> ${savedInfo.os}</p>
    <p><b>Браузер:</b> ${savedInfo.browser}</p>
    <p><b>Роздільна здатність:</b> ${savedInfo.screen.width}x${savedInfo.screen.height}</p>
`;

fetch('https://jsonplaceholder.typicode.com/posts/21/comments')
    .then(response => response.json())
    .then(comments => {
        const container = document.getElementById('comments');
        const list = document.createElement('ul');
        comments.forEach(comment => {
            const item = document.createElement('li');
            item.innerHTML = `<b>${comment.name}</b> (<i style="color: blue;">${comment.email}</i>): <p>${comment.body}</p>`;
            list.appendChild(item);
        });
        container.appendChild(list);
    });

setTimeout(() => {
    document.getElementById('modal').style.display = 'flex';
}, 60000);

document.getElementById('closeModal').onclick = () => {
    document.getElementById('modal').style.display = 'none';
};

const themeBtn = document.getElementById('themeToggle');
themeBtn.onclick = () => {
    document.body.classList.toggle('day-theme');
    document.body.classList.toggle('night-theme');
};

function applyAutoTheme() {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
        document.body.classList.add('day-theme');
        document.body.classList.remove('night-theme');
    } else {
        document.body.classList.add('night-theme');
        document.body.classList.remove('day-theme');
    }
}
applyAutoTheme();