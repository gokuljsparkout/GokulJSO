import './App.css';
{/* Data types used jsx */}
function App() {
  const topic ="React";
  const age =17;
  const likes =['JSX','React','Redux'];

    return (
      <div id='someId'>
        <h1 id='header'>{topic} is Awesome !!! </h1>
        <h2>{age}</h2>
        <h2>{likes + ""}</h2>
        <h2>{true}</h2>
        {/* Since if else statements doesn't works, Use Ternary Operator */}
        <h2>{String(true)}</h2>
        {
          age<18 ? <h1>Not available for license</h1> : <h1>Available for license</h1>
        }
      </div>
    );
}
export default App;
