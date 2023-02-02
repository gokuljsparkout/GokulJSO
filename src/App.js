import './App.css';
{/* Iterate through Array */}

function App() {
  const topic ="React";
  const age =17;
  const likes =['JSX','React','Redux'];

    return (
      <div id='someId'>
        <h2>{likes + ""}</h2>
        {/* To iterate through array,map method is used */}
        {
          likes.map(like => <h3>{like}</h3>
          )
        }
      </div>
    );
}
export default App;
