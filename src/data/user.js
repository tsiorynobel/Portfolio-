const INFO = {
	main: {
		title: "Portfolio de Patrice Tsiory Nobel",
		name: "Patrice Tsiory Nobel",
		email: "nobel.lebonheurdepatrice@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/tsiorynobel",
		linkedin: "https://www.linkedin.com/in/lebonheur-de-patrice-tsiory-nobel-156b38250/",
		stackoverflow: "https://stackoverflow.com/",
	},

	homepage: {
		title: "Développeur full-stack JavaScript en alternance.",
		description: "Polyvalent sur différentes technologies, je maîtrise particulièrement le développement web avec Node.js, React et Angular, ainsi que le mobile avec Flutter. Code propre, tests rigoureux, amélioration continue. Actuellement en formation sur l'IA et le Machine Learning en JavaScript pour rester performant et à la pointe."
	},

	about: {
		title: "Je suis Patrice, passionné par le code et toujours motivé pour participer à vos projets.",
        description:"Ma vraie passion est le basketball, mais comme il est devenu à la mode de dire que son métier est sa passion, je parle de l’informatique comme si c’était la mienne. J’ai commencé à l’Université de Rouen, où j’ai appris la programmation en Java et C, le fonctionnel avec OCaml, le web avec JavaScript et PHP, les bases de données avec SQL, le traitement de données avec Python, ainsi que l’assembleur et la logique mathématique. En alternance, j’ai découvert le monde professionnel, exigeant et axé sur les résultats, et j’ai appris à m’adapter rapidement. J’ai travaillé avec des technologies modernes comme Angular, React et Docker, appliqué la méthode agile, et aujourd’hui je peux intégrer n’importe quel projet et contribuer efficacement dès le départ."
	},

	articles: {
		title: "Mes expériences à partager",
		description:
			"Je souhaite partager mes expériences professionnelles et personnelles afin de transmettre mes apprentissages et inspirer ceux qui veulent progresser. Chaque étape de mon parcours m’a permis de développer mes compétences, relever des défis et mieux comprendre le monde professionnel. J’espère que mon parcours pourra vous motiver et offrir de nouvelles perspectives.",
	},

	projects: [
		{
			title: "Zara Service",
			    description: `
					Application web collaborative qui met en relation des demandeurs et des prestataires de services (coiffure, bricolage, plomberie, livraison, etc.). 
					Conçue avec une architecture n-tiers, elle combine un backend Spring Boot 3 / Java 17 (API REST, authentification JWT, gestion des rôles, paiements Mobile Money) 
					et un frontend Angular 16 (recherche et filtrage des services, tableau de bord prestataire, profil utilisateur, historique des prestations et système de réservation en ligne).

					Ce projet est en amélioration continue, avec pour objectif d'ajouter de nouvelles fonctionnalités, d'optimiser l'expérience utilisateur et de faciliter la mise en relation de manière simple et efficace.
					`,
				technologies: ["Spring Boot 3", "Java 17", "Angular 16", "JWT", "Mobile Money"],
				status: "En amélioration continue",
				link: "https://zara-service.vercel.app/auth/login?returnUrl=%2F",
				logo: "../public/zaraService.png",
		},

		{
			title: "Refonte du site Arribas France",
			    description: `
					Refonte complète du site web Arribas France pour moderniser l'interface et améliorer l'expérience utilisateur. 
					Le projet a inclus l'optimisation des performances, la mise à jour des modules existants, et l'intégration de nouvelles fonctionnalités pour faciliter la navigation et le parcours client.
					
					Le backend a été travaillé avec Symfony pour structurer l'application et faciliter la maintenance, tandis que l’interface front-end a été optimisée pour une expérience utilisateur fluide et moderne.
					`,
				technologies: ["Symfony", "PrestaShop", "PHP", "Modules e-commerce", "Optimisation UX/UI"],
				status: "Projet terminé",
				link: "https://www.arribas.fr/",
				logo: "../public/arribas.jpg",
		},

			],
};

export default INFO;
