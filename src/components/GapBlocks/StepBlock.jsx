import React from "react";
import styles from "./GapBlocks.module.scss";
import vector1 from "../../assets/Vector (1).png";
import vector2 from "../../assets/Vector (2).png";
import vector3 from "../../assets/Vector (3).png";
import vector4 from "../../assets/Vector (4).png";
import trainImg from "../../img/train.png";

const stepsData = [
	{ src: vector1, alt: "Обирай напрямок", text: "Обирай напрямок" },
	{ src: vector2, alt: "Плануй дату", text: "Плануй дату" },
	{ src: vector3, alt: "Збирай друзів", text: "Збирай друзів" },
	{ src: vector4, alt: "Лови враження!", text: "Лови враження!" },
];

const StepBlock = () => (
	<section className={styles.gap_block}>
		<div className={styles.gap_section}>
			<h3 className={styles.gap_title}>4 кроки до подорожі вашої мрії</h3>
			<ul className={styles.gap_impression}>
				{stepsData.map((step, index) => (
					<li key={index} className={styles.gap_say}>
						<div className={styles.gap_tumb_img}>
							<img src={step.src} alt={step.alt} className={styles.gap_img} />
						</div>
						<p className={styles.gap_text}>{step.text}</p>
					</li>
				))}
			</ul>
			<div className={styles.gap_vector}>
				<img src={trainImg} alt="train" />
			</div>
		</div>
	</section>
);

export default StepBlock;
