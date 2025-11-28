import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./arribas.jpeg"
								alt="arribas france"
								className="work-image"
							/>
							<div className="work-title">Webmaster Développeur - Alternance</div>
							<div className="work-subtitle">
								Arribas France, Île-de-France
							</div>
							<div className="work-duration">2022 - 2026</div>
						</div>

						<div className="work">
							<img
								src="./seyos.jpeg"
								alt="seyos"
								className="work-image"
							/>
							<div className="work-title">Développeur Full-Stack JAVASCRIPT - STAGE</div>
							<div className="work-subtitle">
								SEYOS, Rouen 
							</div>
							<div className="work-duration">2024 - 2024</div>
						</div>
							<div className="work">
							<img
								src="./seyos.jpeg"
								alt="seyos"
								className="work-image"
							/>
							<div className="work-title">Développeur Full-Stack PHP - STAGE</div>
							<div className="work-subtitle">
								SEYOS, Rouen 
							</div>
							<div className="work-duration">2023 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
