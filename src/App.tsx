import logo from './assets/logo.svg';

const App = () => (
  <div className="text-center">
    <header
      className={`
        min-h-screen
        flex flex-col items-center justify-center
        text-white text-[calc(10px_+_2vmin)]
        bg-[#282c34]
    `}
    >
      <img
        src={logo}
        alt="logo"
        className={`
            h-[40vmin]
            pointer-events-none
            animate-spin [animation-duration:20s]
        `}
      />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="color-[#61dafb]"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
