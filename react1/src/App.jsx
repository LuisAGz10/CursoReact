import styles from './css/App.module.css';
import VideoItem from './components/VideoItem.jsx';
import VideoList from './components/VideoList.jsx';

const App = () => {
	console.log('Render App');
	return (
		<div className={styles.container}>
			<VideoList title='Curso de React'>
				<VideoItem
					title='Componentes'
					duration={2760}
					uploadDate={new Date(2025, 10, 9)}
					description='Componentes en React'
				></VideoItem>
				<VideoItem
					title='useState'
					duration={3145}
					uploadDate={new Date(2025, 10, 10)}
					description='Como utilizar estados en React'
				></VideoItem>
			</VideoList>
			<VideoList title='Curso de Node JS'>
				<VideoItem
					title='Intro a Node JS'
					duration={2760}
					uploadDate={new Date(2025, 10, 9)}
					description='Introducción al backend con Node JS'
				></VideoItem>
			</VideoList>
			<VideoList title='Curso de Next JS'></VideoList>
		</div>
	);
};

export default App;
