import React from "react";
import Hero from "../../components/Hero/Hero";
import AboutProject from "../../components/AboutProject/AboutProject";
import Sections from "../../components/Sections/Sections";
import StepBlock from "../../components/GapBlocks/StepBlock";
import styles from "./Homepage.module.scss";
import SupportUs from "../../components/SupportUs/SupportUs";
import FaqSection from "../../components/FAQ/FAQ";

const Homepage = () => (
	<div className={styles.homepage_contener}>
		<Hero />
		<AboutProject />
		<StepBlock />
		<Sections />
		<FaqSection />
		<SupportUs />
	</div>
);

export default Homepage;
