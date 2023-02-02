import './App.css';
{/* Data types used jsx */}
function App() {
  const topic ="React";
  const age =39;
  const likes =['JSX','React','Redux'];

    return (
      <div id='someId'>
        <h1 id='header'>{topic} is Awesome !!! </h1>
        <h2>{age}</h2>
        <h2>{likes + ""}</h2>
        <h2>{true}</h2> {/* Boolean doesn't print anything on the web page */}
      </div>
    );
}
export default App;
