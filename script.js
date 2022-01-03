import darkTheme from "./dark-theme.js";
import countdown from "./cuenta-regresiva.js";
import scrollTopButton from "./scroll.js";



/*********************Menu******************* */

((d) =>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active"); 
    }); 

    d.addEventListener("click", e =>{
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active"); 
    })
})(document); 

// *******************************Contact form******************
 
((d)=>{
  const $form = d.querySelector(".contact-form"),
  $loader = d.querySelector(".contact-form-loader"),
  $response = d.querySelector(".contact-form-response"); 
  
  $form.addEventListener("submit", (e) =>{
      e.preventDefault();
      $loader.classList.remove("none"); 
      fetch("https://formsubmit.co/ajax/vargasfrancisco36@gmail.com",{
          method: "POST",
          body: new FormData(e.target),
      }).then(res => (res.ok ? res.json(): Promise.reject(res)))
      .then((json) =>{
        console.log(json); 
        location.hash = "#gracias";
        $form.reset(); 
      })
      .catch((err) =>{
        console.log(err);
        let massage = err.statusText || "Ocurrió un error al enviar los datos, intenta nuevamente"
        $response.querySelector("h3").innerHTML = `Error ${err.status}: ${massage}`; 

      }).finally(() =>{
        $loader.classList.add("none"); 
        setTimeout(() =>{
           location.hash = "#close";
        },3000);

      });
  });

})(document);

// ******************Llamada para la función del tema oscuro**************************
darkTheme(".dark-theme-btn", "dark-mode"); 


// *******************Cuenta regresiva****************************************
const doc = document;

doc.addEventListener("DOMContentLoaded", e=>{
  countdown("countdown", "March 25, 2022 00:00:00", "Lo logré, es hoy, hoy encontré mi primer trabajo como desarrollador ❤😍"); 

// ****************************Scroll buttom****************************
scrollTopButton(".scroll-top-btn"); 
});

