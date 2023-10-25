
function scrollToAbout() {
    const aboutSection = document.getElementById("about-section");
    
    if (aboutSection) {
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth' // Cette option ajoute une animation de défilement
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
	
	// ...
	// Based on the Scroller function from @sallar
var content = document.querySelector('header .content');
var blur = document.querySelector('header .overlay');
var wHeight = window.innerHeight || document.documentElement.clientHeight;

window.addEventListener('resize', function() {
  wHeight = window.innerHeight || document.documentElement.clientHeight;
});

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function Scroller() {
  this.latestKnownScrollY = 0;
  this.ticking = false;
}

Scroller.prototype = {
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
    blur.style.backgroundImage = getComputedStyle(document.querySelector('header:first-of-type')).backgroundImage;
  },

  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  requestTick: function() {
    if (!this.ticking) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking = false;

    var slowScroll = currentScrollY / 2;
    var blurScroll = currentScrollY * 2;
    var opaScroll = 1.4 - currentScrollY / 400;

    content.style.transform = 'translateY(' + slowScroll + 'px)';
    content.style.MozTransform = 'translateY(' + slowScroll + 'px)';
    content.style.WebkitTransform = 'translateY(' + slowScroll + 'px)';
    content.style.opacity = opaScroll;

    blur.style.opacity = blurScroll / wHeight;
  },
};

var scroller = new Scroller();
scroller.init();



	
    var levelSelect = document.getElementById("level-select");
    var levelContent = document.getElementById("level-content");
    var enSavoirPlusLink = document.getElementById("en-savoir-plus-link");
	var texte = "A venir prochainement.";

    // Fonction pour afficher le contenu en fonction du niveau choisi
    function showLevelContent(selectedLevel) {
        levelContent.innerHTML = '';
        enSavoirPlusLink.style.display = "none"; // Masque le bouton "En savoir plus" par défaut

        // Ici, vous pouvez mettre en place la logique pour afficher le contenu spécifique au niveau
        // et définir le lien "En savoir plus" correspondant pour chaque niveau.
        if (selectedLevel === 'cm1') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "cm1.html"; // Lien vers la page CM1
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === 'cm2') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "cm2.html"; // Lien vers la page CM2
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '6eme') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "6eme.html"; // Lien vers la page 6ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '5eme') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "5eme.html"; // Lien vers la page 5ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '4eme') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "4eme.html"; // Lien vers la page 4ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '3eme') {
            levelContent.innerHTML = "<p>A venir prochainement</p>";
			enSavoirPlusLink.href = "3eme.html"; // Lien vers la page 3ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '2nde') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "2nde.html"; // Lien vers la page 2nde
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '1ere') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "1ere.html"; // Lien vers la page 1ère
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === 'terminale') {
            levelContent.innerHTML = texte;
			enSavoirPlusLink.href = "terminale.html"; // Lien vers la page Terminale
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
    }

    // Gérez le changement d'options
    levelSelect.addEventListener('change', function () {
        var selectedLevel = this.value;
        showLevelContent(selectedLevel);
    });
	
	 // Définissez l'option par défaut et affichez son contenu correspondant
    var defaultLevel = 'cm1'; // Niveau par défaut
    levelSelect.value = defaultLevel; // Définir l'option par défaut
    showLevelContent(defaultLevel); // Afficher le contenu correspondant
	
	var carouselItems = document.querySelectorAll(".carousel-item");
	carouselItems[0].classList.add("active");

	var total = carouselItems.length;
	var current = 0;

	var moveRight = document.getElementById("moveRight");
	moveRight.addEventListener("click", function () {
	var next = current;
	current = current + 1;
	setSlide(next, current);
	});

	var moveLeft = document.getElementById("moveLeft");
	moveLeft.addEventListener("click", function () {
	var prev = current;
	current = current - 1;
	setSlide(prev, current);
	});

	function setSlide(prev, next) {
	var slide = current;
	if (next > total - 1) {
	  slide = 0;
	  current = 0;
	}
	if (next < 0) {
	  slide = total - 1;
	  current = total - 1;
	}

	carouselItems[prev].classList.remove("active");
	carouselItems[slide].classList.add("active");

	console.log("current " + current);
	console.log("prev " + prev);
	}

	
});

