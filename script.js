

document.addEventListener("DOMContentLoaded", function () {
    var levelSelect = document.getElementById("level-select");
    var levelContent = document.getElementById("level-content");
	console.log("entree 1");

    // Fonction pour afficher le contenu en fonction du niveau choisi
    function showLevelContent(selectedLevel) {
		console.log("entree 2");
		console.log(selectedLevel);
        levelContent.innerHTML = '';
        if (selectedLevel === 'cm1') {
			console.log("passe");
            levelContent.innerHTML = "<p>Bienvenue, chers CM1 ! Dans ce programme, nous allons explorer les bases fascinantes de l'intelligence artificielle. Vous découvrirez comment les ordinateurs peuvent apprendre et résoudre des problèmes. Au programme, des activités amusantes, telles que la création de chatbots, la programmation de jeux simples et la compréhension des algorithmes de base. Préparez-vous à être émerveillés par le monde de l'IA !</p>";
        } else if (selectedLevel === 'cm2') {
            levelContent.innerHTML = "<p>Bienvenue aux CM2, explorateurs de l'IA ! Dans ce voyage, nous allons plonger dans les merveilles de l'intelligence artificielle. Vous apprendrez comment les ordinateurs peuvent comprendre la parole, reconnaître des images et résoudre des énigmes. Attendez-vous à des projets captivants, tels que la création de chatbots, la conception de jeux interactifs et la découverte des principes fondamentaux de l'IA. Préparez-vous à être inspirés par la technologie de demain !</p>";
        } else if (selectedLevel === '6eme') {
            levelContent.innerHTML = "<p>Bienvenue en 6ème, futurs experts en IA ! Notre parcours d'apprentissage vous plongera dans l'univers passionnant de la programmation et de l'intelligence artificielle. Vous allez explorer les bases de la programmation, comprendre comment fonctionnent les chatbots et créer vos propres jeux informatiques. Préparez-vous à acquérir des compétences techniques tout en vous amusant !</p>";
        } else if (selectedLevel === '5eme') {
            levelContent.innerHTML = "<p>En 5ème, nous explorerons des projets ludiques d'intelligence artificielle. Vous apprendrez à construire un chatbot, à analyser des données et à créer un modèle de recommandation. Préparez-vous à des activités interactives captivantes pour développer vos compétences en IA.</p>";
        } else if (selectedLevel === '4eme') {
            levelContent.innerHTML = "<p>Bienvenue aux élèves de 4ème ! Dans ce programme, vous vous concentrerez sur les algorithmes et la création de modèles d'IA simples. Vous serez amenés à résoudre des problèmes stimulants, à créer des jeux interactifs et à explorer comment les machines apprennent et prennent des décisions. Préparez-vous à des découvertes passionnantes dans le domaine de l'IA !</p>";
        } else if (selectedLevel === '3eme') {
            levelContent.innerHTML = "<p>Salut à tous, élèves de 3ème ! Dans ce cours d'intelligence artificielle, nous explorerons des applications plus avancées. Vous comprendrez comment les voitures autonomes fonctionnent, comment les chatbots interagissent avec les humains et même comment les jeux vidéo utilisent l'IA pour créer des mondes immersifs. Préparez-vous à des aventures numériques passionnantes !</p>";
        } else if (selectedLevel === '2nde') {
            levelContent.innerHTML = "<p>Bienvenue en 2nde ! Au programme, nous explorerons des sujets avancés d'intelligence artificielle. Vous plongerez dans la création de modèles d'IA complexes, comprendrez les réseaux neuronaux, et créerez des projets d'IA personnalisés. Préparez-vous à repousser les limites de la technologie et à explorer des domaines passionnants de l'IA.</p>";
        } else if (selectedLevel === '1ere') {
            levelContent.innerHTML = "<p>Bonjour à vous, élèves de 1ère ! Au cours de cette session, vous explorerez des projets d'intelligence artificielle complexes. Vous allez créer des chatbots avancés, travailler sur des projets de vision par ordinateur et comprendre comment l'IA est utilisée pour résoudre des problèmes du monde réel. Préparez-vous à des expériences exceptionnelles en IA.</p>";
        } else if (selectedLevel === 'terminale') {
            levelContent.innerHTML = "<p>Bienvenue aux Terminales ! Dans cette session, nous explorerons les tendances actuelles de l'intelligence artificielle. Vous plongerez dans des projets avancés d'IA, découvrirez comment les voitures autonomes fonctionnent, et explorerez comment l'IA révolutionne la médecine, la finance et d'autres domaines. Préparez-vous à être inspirés par l'avenir de l'IA !</p>";
        }
    }
	levelContent.style.display = 'block';

    // Gérez le changement d'options
    levelSelect.addEventListener('change', function () {
		
        var selectedLevel = this.value;
        showLevelContent(selectedLevel);
    });

    // Définissez l'option par défaut et affichez son contenu correspondant
    var defaultLevel = 'cm1'; // Niveau par défaut
    levelSelect.value = defaultLevel; // Définir l'option par défaut
    showLevelContent(defaultLevel); // Afficher le contenu correspondant
});
