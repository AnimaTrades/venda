import './styles/index.scss';
import './assets/yarn.jpeg';
import './assets/boleta1.jpg';
import './assets/boleta2.jpg';
import './assets/boleta3.jpg';
import './assets/boleta4.jpg';
import './assets/video.jpg';
import './assets/logo.png';
import './assets/results.png';
import './assets/cel.png';
import './assets/user1.jpeg';
import './assets/user2.jpeg';
import './assets/user3.jpeg';

const btnVideo = document.getElementById('btn-video');
const modal = document.querySelector('.modal');
const contentModal = document.querySelector('.content-modal');
const btnClose = document.querySelector('.close-modal');
const divIframe = document.createElement('div');

const toggleModal = () => {
  modal?.classList.toggle('open');
};

btnClose &&
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    divIframe.innerHTML = '';
    toggleModal();
  });

btnVideo &&
  btnVideo.addEventListener('click', (e) => {
    e.preventDefault();
    divIframe.innerHTML = `
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/fIUnb-hOSNk"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    `;
    contentModal.appendChild(divIframe);
    toggleModal();
  });
