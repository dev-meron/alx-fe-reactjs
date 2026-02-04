import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Alice" age={25} bio="Loves traveling and exploring new cultures." />
      <UserProfile name="Bob" age={30} bio="Enjoys photography and city architecture." />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

