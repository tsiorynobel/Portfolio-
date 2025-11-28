import React from "react";

function article_1() {
	return {
		date: "25 Juillet 2025",
		title: "Pourquoi j'ai quitté l'Université de Rouen pour passer à une formation en alternance",
		description:
		"Après deux années à l'Université de Rouen en informatique, j'ai découvert différents langages (Java, C, OCaml, PHP, JS, SQL, Python) et la logique mathématique. Toutefois, la formation était trop théorique et ne reflétait pas le monde professionnel. Mon stage chez SEYOS en tant que développeur fullstack m'a permis de mettre en pratique mes compétences, ce qui m'a motivé à choisir l'alternance pour allier apprentissage et expérience concrète en entreprise.",
		keywords: [
		"Université de Rouen",
		"Alternance",
		"Informatique",
		"Java",
		"C",
		"OCaml",
		"PHP",
		"JavaScript",
		"SQL",
		"Python",
		"Développement Fullstack",
		"SEYOS",
	],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="/universite-rouen.jpg"
						alt="universite-rouen"
						className="randImage"
					/>
				<div class="paragraph">

					<p>
						Après deux années à l'Université de Rouen en informatique, j'ai découvert différents langages 
						<strong>Java</strong>, <strong>C</strong>, <strong>OCaml</strong>, <strong>PHP</strong>, 
						<strong>JavaScript</strong>, <strong>SQL</strong>, <strong>Python</strong> 
						ainsi que la <em>logique mathématique</em>. 
						Toutefois, la formation restait très théorique et ne reflétait pas réellement les exigences du monde professionnel.
					</p>

					<p>
						Mon stage chez <strong>SEYOS</strong> en tant que développeur full-stack m’a permis de mettre en pratique mes compétences, 
						de comprendre les attentes des équipes techniques et d’apprendre à travailler sur de vrais projets. 
						Cette expérience a confirmé mon envie de poursuivre en alternance.
					</p>

					<p><strong>Pourquoi l’alternance est un vrai avantage :</strong></p>

					<ul>
						<li><strong>Apprendre en conditions réelles</strong> : appliquer immédiatement ce que l’on voit en cours pour progresser plus vite.</li>
						<li><strong>Développer des compétences professionnelles concrètes</strong> 
							(<em>méthodologies, autonomie, travail en équipe, gestion de projet…</em>).</li>
						<li><strong>Être confronté à de vrais enjeux techniques</strong>, bien plus proches de la réalité du métier.</li>
						<li><strong>Gagner en maturité et en confiance</strong> grâce à la prise de responsabilités.</li>
						<li><strong>Acquérir une expérience solide tout en continuant à se former</strong>, un atout majeur pour débuter dans le développement.</li>
					</ul>
					<p>
						J’ai choisi cette voie pour allier <strong>apprentissage</strong>, <strong>expérience</strong> et <em>évolution</em>.
					</p>

				</div>

				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "10 Octobre 2024",
		title: "L'insertion professionnelle n'est pas toujours facile",
		description:
				"Lors de mon insertion professionnelle pour mon année d'alternance, j'étais très concentré sur le travail et parfois un peu réservé dans les échanges avec l'équipe. Au début, cette approche pouvait rendre les interactions avec mon tuteur et mes collègues un peu difficiles. Avec le temps, j'ai appris à mieux communiquer, à équilibrer efficacité et échanges, et à m'intégrer pleinement à l'équipe, qui est devenue comme une seconde famille.",
		keywords: [
				"Insertion professionnelle",
				"Alternance",
				"Adaptation",
				"Communication",
				"Relations professionnelles",
				"Équipe",
				"Apprentissage",
				"Développement personnel",
			],
		body: (
			<React.Fragment>
					<div className="article-content">
					<img
						src="/insertion.jpg"
						alt="insrtion-professionnelle"
						className="randImage"
					/>
				<div class="paragraph">
					<p>
							Au début de mon année d'alternance, j'étais très concentré sur mes missions et parfois un peu réservé dans mes échanges avec l'équipe. 
							<strong>Cette prudence initiale</strong> rendait les interactions avec mon tuteur et mes collègues parfois un peu difficiles.
						</p>

						<p>
							Progressivement, j'ai appris à <strong>mieux communiquer</strong>, à <em>équilibrer efficacité et échanges</em>, 
							et à m'intégrer pleinement. Aujourd'hui, je peux dire que l'équipe est devenue <strong>une vraie seconde famille</strong>, 
							et que cette expérience m'a permis de développer autant mes compétences professionnelles que mes qualités humaines.
						</p>

						<p>
							<strong>En résumé :</strong> cette année m’a appris à travailler efficacement, à collaborer avec confiance, 
							et à m’épanouir dans un environnement professionnel stimulant.
						</p>

				</div>

				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "25 Juillet 2023",
		title: "Mon choix de carrière",
		description:
				"Passionné par l'informatique depuis mes débuts, j'ai développé une solide expertise en développement, en résolvant des problèmes concrets et en créant des projets concrets. Mon objectif est de devenir développeur pour comprendre le métier en profondeur et contribuer efficacement à des projets innovants. À terme, je souhaite évoluer vers un rôle de Product Owner, où je pourrai piloter des projets, coordonner des équipes et combiner mes compétences techniques et ma vision stratégique pour créer des produits à forte valeur ajoutée.",
		keywords: [
				"Choix de carrière",
				"Informatique",
				"Développement",
				"Développeur",
				"Product Owner",
				"Gestion de projet",
				"Vision stratégique",
				"Compétences techniques",
				"Passion",
				"Ambition",
			],
		body: (
			<React.Fragment>
					<div className="article-content">
					<img
						src="/evolution.jpg"
						alt="évolution de carrière"
						className="randImage"
					/>
					<div class="paragraph">
						<p>
							Passionné par l'informatique depuis mes débuts, j'ai développé une solide expertise en développement, en résolvant des problèmes concrets et en créant des projets tangibles. Mon objectif est de devenir <strong>développeur</strong> pour comprendre le métier en profondeur et contribuer efficacement à des projets innovants. À terme, je souhaite évoluer vers un rôle de <strong>Product Owner</strong>, où je pourrai piloter des projets, coordonner des équipes et combiner mes compétences techniques et ma vision stratégique pour créer des produits à forte valeur ajoutée.
						</p>

						<p>
							Ce parcours professionnel présente plusieurs avantages décisifs. Commencer comme développeur me permet d'acquérir une <strong>compréhension technique approfondie</strong> des contraintes de développement, essentielle pour prendre des décisions éclairées en tant que Product Owner. Cette expertise terrain me permettra d'estimer les efforts de manière réaliste, de prioriser efficacement le backlog et de dialoguer avec les équipes techniques en toute crédibilité.
						</p>

						<p>
							Cette transition progressive développe une <strong>double compétence rare</strong> : la maîtrise technique couplée à une vision produit stratégique. En tant que PO avec un background de développeur, je pourrai challenger les spécifications techniques tout en restant focalisé sur la <strong>valeur utilisateur</strong> et les objectifs business.
						</p>

						<p>
							À plus long terme, évoluer vers <strong>Product Manager</strong> représente l'aboutissement logique de ce parcours. Avec mon expérience technique et ma vision produit, je disposerai d'une compréhension complète du cycle de vie produit pour piloter des roadmaps ambitieuses et créer des produits qui allient <strong>innovation technique et réussite business</strong>.
						</p>
					</div>

				</div>
			</React.Fragment>
		),
	};
}
const myArticles = [article_1, article_2, article_3];

export default myArticles;
