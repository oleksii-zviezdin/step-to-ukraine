import styles from "../Sections/Sections.module.scss";

const SectionImgComposition = ({
	img_1,
	img_2,
	img_3,
	description1,
	description2,
	description3,
}) => {
	return (
		<>
			<div className={styles.section_gallery}>
				<div className={styles.section_line_box}></div>
				<ul>
					<li>
						<div className={styles.section_img_card_1}>
							<img
								className={styles.section_img_1}
								src={img_1}
								alt={description1}
							/>
						</div>
					</li>
					<li>
						<div className={styles.section_img_card_2}>
							<img
								className={styles.section_img_2}
								src={img_2}
								alt={description2}
							/>
						</div>
					</li>
					<li>
						<div className={styles.section_img_card_3}>
							<img
								className={styles.section_img_3}
								src={img_3}
								alt={description3}
							/>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SectionImgComposition;
