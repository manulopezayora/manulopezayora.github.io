/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
})

// ! Projects Data
const PROJECTS = [
    {
      id: 1,
      imgURL: 'img/Clipboard-landing-page.png',
      imgAlt: 'Clipboard-landing-page',
      tagText: 'HTML - CSS',
      tagClassName: 'vanila',
      title: 'Clipboard landing page',
      info: 'Proyecto de maquetación de una landing page sacado de la página FrontEnd Mentor',
      projectURL: 'https://manulopezayora.github.io/clipboard-landing-page/',
      repositoryURL: 'https://github.com/manulopezayora/clipboard-landing-page'
    },
    {
      id: 2,
      imgURL: 'img/RockPaperScissors.png',
      imgAlt: 'Rock-Paper-Scissors',
      tagText: 'HTML - CSS - JS',
      tagClassName: 'vanila',
      title: 'Rock Paper Scissors',
      info: 'Proyecto sacado de FrontEnd Mentor y modificado para hacer la práctica de Dorian Desing.',
      projectURL: 'https://manulopezayora.github.io/rock-paper-scissors/',
      repositoryURL: 'https://github.com/manulopezayora/rock-paper-scissors'
    },
    {
      id: 3,
      imgURL: 'img/Maps.png',
      imgAlt: 'Maps',
      tagText: 'HTML - CSS - JS',
      tagClassName: 'vanila',
      title: 'Maps con Leaflet',
      info: 'Proyecto de marcador de mapas con la API de Leaflet. Las coordenadas son las que da google en la URL de google maps.',
      projectURL: 'https://manulopezayora.github.io/leaflet-maps/',
      repositoryURL: 'https://github.com/manulopezayora/leaflet-maps'
    }
  ];

/* ---- END particles.js config ---- */

// ! DOM
const projectsContainer = document.getElementById("projects");

// ! Variables
const projectData = PROJECTS;

// ! Functions
// Create project component
const createProject = async () => {
  const cardContainer = document.createElement("DIV");
  cardContainer.classList.add("card-container");

  projectData.forEach((project) => {
    cardContainer.innerHTML += `
    <div class="card">
       <div class="card__top">
         <a href="${project.projectURL}" target="_blank" rel="noopener noreferrer">
           <img class="card__img" src="${project.imgURL}" alt="${project.imgAlt}" />
         </a>
       </div>
       <div class="card__content">
         <h3 class="tag tag-${project.tagClassName}">${project.tagText}</h3>
         <a class="card__link" href="${project.projectURL}" target="_blank" rel="noopener noreferrer" >
           <h3 class="card__title">${project.title}</h3>
         </a>

       </div>
       <div class="card__footer">
         <a href="${project.projectURL}" class="card__footer-link"target="_blank" rel="noopener noreferrer">Ver aplicación</a>
         <a href="${project.repositoryURL}" class="card__footer-link"target="_blank" rel="noopener noreferrer">Ver repositorio</a>
       </div>
     </div>
     `
  });
  projectsContainer.append(cardContainer);
}

// ! Events

window.addEventListener("load", () => {
  createProject();
});
