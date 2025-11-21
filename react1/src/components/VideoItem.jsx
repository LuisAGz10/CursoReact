import styles from '../css/VideoItem.module.css';

const VideoItem = ({ title, duration, uploadDate, description }) => {
	console.log('  - Render VideoItem');
	let seconds = duration % 60;
	if (seconds < 10) {
		seconds = '0' + seconds;
	}
	const minutes = Math.floor(duration / 60);

	return (
		<div className={styles.video}>
			<h3>{title}</h3>
			<div>
				<span className={styles.duration}>
					{minutes}:{seconds}
				</span>
				<span>{uploadDate.toLocaleDateString()}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;
