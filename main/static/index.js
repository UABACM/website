console.log("Thank you for visiting. Looks like you are interested in Web Development. Check out the full source code here: https://acmatuab.org/github");
// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
    burger.addEventListener('click', e => {
    burger.dataset.state === 'closed' ? burger.dataset.state = "open" : burger.dataset.state = "closed";
    nav.dataset.state === "closed" ? nav.dataset.state = "open" : nav.dataset.state = "closed";
});
// Night Mode. Day Mode
var theme = localStorage.getItem('theme');
const switchTumblerHandler = () => {
    const wrapper = document.querySelector('.tumbler__wrapper');
    wrapper.addEventListener('click', () => {
        if(theme == 'dark') {
            localStorage.setItem('theme','light');
        } else {
            localStorage.setItem('theme','dark');
        }
        toggleNightMode();
    });
};
const toggleNightMode = () => {
    document.body.classList.toggle('body--night-mode');
    document.querySelector('.tumbler').classList.toggle('tumbler--night-mode');
    document.querySelectorAll('.news').forEach(post => {
        post.classList.toggle('news--night-mode');
    });
    document.querySelectorAll('.topNewsSection').forEach(post => {
        post.classList.toggle('topNewsSection--night-mode');
    });
    document.querySelectorAll('.introSentence-light').forEach(post => {
        post.classList.toggle('introSentence-dark');
    });
    document.querySelectorAll('.article').forEach(post => {
        post.classList.toggle('article-dark');
    });
    document.querySelectorAll('.burger').forEach(post => {
        post.classList.toggle('burger-night');
    });
    document.querySelectorAll('.topTopics').forEach(post => {
        post.classList.toggle('.topTopics--nightmode');
    });
};
switchTumblerHandler();
if(theme == 'dark') {
    toggleNightMode();
}