import './App.css';

function App() {
  const prevBtn = "< Previous"
  const nextBtn = "Next >"
  return (
    <div className="App">

      <header className="header flex-row">
        <h4> Home </h4>
      </header>

      <div className="user-container flex-row">
        <section className="user-directory">
          <p className="counter">1/25</p>
          <h1 className="name">FirstName LastName</h1>
          <div id="user-info-1">
            <p><strong>From:</strong> blah blah blah</p>
            <p><strong>Job Title:</strong> blah blah blah</p>
            <p><strong>Employer:</strong> blah blah blah</p>
          </div>
          
          <div id="user-info-2">
          <p><strong>Favorite Movies:</strong></p>
            <ol>
              <li>first</li>
              <li>second</li>
              <li>third</li>
            </ol>
          </div>

        </section>
        
        <nav className="navigation flex-row">
          <h4>{prevBtn}</h4>
          <div className="btns flex-row">
            <button className="cud-btn">Edit</button>
            <button className="cud-btn">Delete</button>
            <button className="cud-btn">New</button>
          </div>
          <h4>{nextBtn}</h4>
        </nav>


      </div>

    </div>
  );
}

export default App;
