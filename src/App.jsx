import Header from './components/Header';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Gallery />
      </main>
      <MusicPlayer />
    </div>
  );
}
