import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>React Art</h1>
      <p>Designing React App</p>
    </header>
  );
}
