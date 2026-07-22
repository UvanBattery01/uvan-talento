/* ======================================================
   UVAN TALENTO
   script.js v1.0
====================================================== */

console.log("UVAN TALENTO cargado correctamente.");

/* ========= HEADER ========= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.padding = "12px 8%";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.padding = "18px 8%";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,.05)";

    }

});


/* ========= SCROLL SUAVE ========= */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ========= ANIMACIÓN AL APARECER ========= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".reveal").forEach(item=>{

    observer.observe(item);

});


/* ========= BOTONES ========= */

document.querySelectorAll(".btn-primary,.btn-secondary").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


/* ========= EFECTO PARALLAX HERO ========= */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero");

    if(hero){

        hero.style.backgroundPositionY=(window.scrollY*0.3)+"px";

    }

});


/* ========= FUTURAS FUNCIONES ========= */

// Vacantes dinámicas

// Buscador

// Formulario

// Envío de CV

// Panel Administrativo

// Estadísticas

// Notificaciones

console.log("Sistema listo.");

/* ===========================
   CARGAR VACANTES
=========================== */

async function cargarVacantes() {

    const respuesta = await fetch("vacantes.json");
    const vacantes = await respuesta.json();

    const contenedor = document.getElementById("vacantes-container");

    contenedor.innerHTML = "";

    vacantes.forEach(vacante => {

        contenedor.innerHTML += `

        <div class="vacante">

            <h3>${vacante.puesto}</h3>

            <p><strong>Sucursal:</strong> ${vacante.sucursal}</p>

            <p><strong>Horario:</strong> ${vacante.horario}</p>

            <p><strong>Descanso:</strong> ${vacante.descanso}</p>

            <p><strong>Salario:</strong> ${vacante.salario}</p>

            <span class="estado">${vacante.estado}</span>

            <a href="#" class="postular">
                Postularme
            </a>

        </div>

        `;

    });

}

cargarVacantes();