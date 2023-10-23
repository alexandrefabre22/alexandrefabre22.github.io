
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
    var levelSelect = document.getElementById("level-select");
    var levelContent = document.getElementById("level-content");
    var enSavoirPlusLink = document.getElementById("en-savoir-plus-link");

    // Fonction pour afficher le contenu en fonction du niveau choisi
    function showLevelContent(selectedLevel) {
        levelContent.innerHTML = '';
        enSavoirPlusLink.style.display = "none"; // Masque le bouton "En savoir plus" par défaut

        // Ici, vous pouvez mettre en place la logique pour afficher le contenu spécifique au niveau
        // et définir le lien "En savoir plus" correspondant pour chaque niveau.
        if (selectedLevel === 'cm1') {
            levelContent.innerHTML = "<p>Bienvenue, chers CM1 ! Dans ce programme, nous allons explorer les bases fascinantes de l'intelligence artificielle. Vous découvrirez comment les ordinateurs peuvent apprendre et résoudre des problèmes. Au programme, des activités amusantes, telles que la création de chatbots, la programmation de jeux simples et la compréhension des algorithmes de base. Préparez-vous à être émerveillés par le monde de l'IA !</p>";
            enSavoirPlusLink.href = "cm1.html"; // Lien vers la page CM1
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === 'cm2') {
            levelContent.innerHTML = "<p>Bienvenue aux CM2, explorateurs de l'IA ! Dans ce voyage, nous allons plonger dans les merveilles de l'intelligence artificielle. Vous apprendrez comment les ordinateurs peuvent comprendre la parole, reconnaître des images et résoudre des énigmes. Attendez-vous à des projets captivants, tels que la création de chatbots, la conception de jeux interactifs et la découverte des principes fondamentaux de l'IA. Préparez-vous à être inspirés par la technologie de demain !</p>";
            enSavoirPlusLink.href = "cm2.html"; // Lien vers la page CM2
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '6eme') {
            levelContent.innerHTML = "<p>Bienvenue en 6ème, futurs experts en IA ! Notre parcours d'apprentissage vous plongera dans l'univers passionnant de la programmation et de l'intelligence artificielle. Vous allez explorer les bases de la programmation, comprendre comment fonctionnent les chatbots et créer vos propres jeux informatiques. Préparez-vous à acquérir des compétences techniques tout en vous amusant !</p>";
            enSavoirPlusLink.href = "6eme.html"; // Lien vers la page 6ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '5eme') {
            levelContent.innerHTML = "<p>En 5ème, nous explorerons des projets ludiques d'intelligence artificielle. Vous apprendrez à construire un chatbot, à analyser des données et à créer un modèle de recommandation. Préparez-vous à des activités interactives captivantes pour développer vos compétences en IA.</p>";
            enSavoirPlusLink.href = "5eme.html"; // Lien vers la page 5ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '4eme') {
            levelContent.innerHTML = "<p>Bienvenue aux élèves de 4ème ! Dans ce programme, vous vous concentrerez sur les algorithmes et la création de modèles d'IA simples. Vous serez amenés à résoudre des problèmes stimulants, à créer des jeux interactifs et à explorer comment les machines apprennent et prennent des décisions. Préparez-vous à des découvertes passionnantes dans le domaine de l'IA !</p>";
            enSavoirPlusLink.href = "4eme.html"; // Lien vers la page 4ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '3eme') {
            levelContent.innerHTML = "<p>Salut à tous, élèves de 3ème ! Dans ce cours d'intelligence artificielle, nous explorerons des applications plus avancées. Vous comprendrez comment les voitures autonomes fonctionnent, comment les chatbots interagissent avec les humains et même comment les jeux vidéo utilisent l'IA pour créer des mondes immersifs. Préparez-vous à des aventures numériques passionnantes !</p>";
            enSavoirPlusLink.href = "3eme.html"; // Lien vers la page 3ème
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '2nde') {
            levelContent.innerHTML = "<p>Bienvenue en 2nde ! Au programme, nous explorerons des sujets avancés d'intelligence artificielle. Vous plongerez dans la création de modèles d'IA complexes, comprendrez les réseaux neuronaux, et créerez des projets d'IA personnalisés. Préparez-vous à repousser les limites de la technologie et à explorer des domaines passionnants de l'IA.</p>";
            enSavoirPlusLink.href = "2nde.html"; // Lien vers la page 2nde
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === '1ere') {
            levelContent.innerHTML = "<p>Bonjour à vous, élèves de 1ère ! Au cours de cette session, vous explorerez des projets d'intelligence artificielle complexes. Vous allez créer des chatbots avancés, travailler sur des projets de vision par ordinateur et comprendre comment l'IA est utilisée pour résoudre des problèmes du monde réel. Préparez-vous à des expériences exceptionnelles en IA.</p>";
            enSavoirPlusLink.href = "1ere.html"; // Lien vers la page 1ère
            enSavoirPlusLink.style.display = "block"; // Affiche le bouton "En savoir plus"
        }
        if (selectedLevel === 'terminale') {
            levelContent.innerHTML = "<p>Bienvenue aux Terminales ! Dans cette session, nous explorerons les tendances actuelles de l'intelligence artificielle. Vous plongerez dans des projets avancés d'IA, découvrirez comment les voitures autonomes fonctionnent, et explorerez comment l'IA révolutionne la médecine, la finance et d'autres domaines. Préparez-vous à être inspirés par l'avenir de l'IA !</p>";
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
	
	
	
		// Sélectionnez le conteneur du diagramme
	const svg = d3.select("#pedagogy-diagram")
	   .append("svg")
	   .attr("width", 600)  // Largeur du diagramme
	   .attr("height", 400); // Hauteur du diagramme

	// Définissez les nœuds
	const nodes = [
	   { name: "Nœud 1" },
	   { name: "Nœud 2" },
	   { name: "Nœud 3" }
	];

	// Définissez les arêtes (liens entre les nœuds)
	const links = [
	   { source: 0, target: 1 },
	   { source: 1, target: 2 }
	];

	// Créez les arêtes
	const link = svg.selectAll(".link")
	   .data(links)
	   .enter()
	   .append("line")
	   .attr("class", "link");

	// Créez les nœuds
	const node = svg.selectAll(".node")
	   .data(nodes)
	   .enter()
	   .append("g")
	   .attr("class", "node")
	   .attr("transform", (d, i) => `translate(${i * 200 + 100}, 200)`); // Positionnez les nœuds horizontalement

	// Ajoutez un cercle à chaque nœud
	node.append("circle")
	   .attr("r", 20) // Rayon du cercle

	// Ajoutez le nom à chaque nœud
	node.append("text")
	   .attr("dy", -30) // Décalage vertical du texte
	   .attr("text-anchor", "middle")
	   .text(d => d.name);

	
	
	
});

