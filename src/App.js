import './App.css';
import { nanoid } from 'nanoid';
import useState from 'react-usestateref';
import Footsection from './components/Footsection';
import Navigation from './components/Navigation';
import Presentation from './components/Presentation';
import Project from './components/Project';

function App() {
  const projects = [{
    name: 'Bogotá Houses', description: 'Directory of real states in Bogotá for selling and renting. Pure HTML and CSS project.', github: 'https://github.com/andresporras3423/bogota-houses', live: 'http://andresporres.000webhostapp.com/bogota-houses/main.html', url: './src/assets/bogota-houses.png', tools: ['HTML/CSS', 'Bootstrap'],
  },
  {
    name: 'Weather Bot', description: 'This telegram bot give you updates of temperature of any city or country in the world.', github: 'https://github.com/andresporras3423/weather-bot-ruby', live: 'https://web.telegram.org/#/im?p=@weather3423_bot', url: './src/assets/weather-bot.png', tools: ['Ruby', 'Telegram API'],
  },
  {
    name: 'The Cool Writer', description: 'A blog with articles about lot of different random topics. Any user can sign up and add articles', github: 'https://github.com/andresporras3423/articles-project', live: 'https://blueberry-custard-86240.herokuapp.com/', url: './src/assets/articles.png', tools: ['Ruby On Rails', 'Ruby', 'SQL', 'HTML/CSS', 'Bootstrap'],
  },
  {
    name: 'English Project', description: 'A website with diferente resources and features to improve your english', github: 'https://github.com/andresporras3423/english-project', live: 'https://englishproject000.000webhostapp.com/ep/index.html', url: './src/assets/english-project.png', tools: ['Vue.js', 'JavaScript', 'SQL', 'PHP', 'HTML/CSS', 'Bootstrap'],
  },
  {
    name: 'Platform game', description: 'A  platform game built with Phaser3 and JavaScript. Inspired by the running dinosaur game', github: 'https://github.com/andresporras3423/platform-game', live: 'https://gifted-poitras-77933b.netlify.app/dist/index.html', url: './src/assets/platform-game.png', tools: ['JavaScript', 'HTML/CSS', 'Webpack'],
  }];

  const filterProjects = () => projects;
  return (
    <div id="app">
      <div className="app">
        <div>
          <Navigation />
          <main>
            <Presentation />
            {
      filterProjects().map((cProject, index) => (
        <Project project={cProject} index={index} key={nanoid()} />
      ))
  }
          </main>
          <Footsection />
        </div>
      </div>
    </div>
  );
}

export default App;
