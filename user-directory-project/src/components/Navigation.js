function Navigation () {
  const prevBtn = "< Previous"
  const nextBtn = "Next >"
  return(
    <nav className="navigation flex-row">
      <h4>{prevBtn}</h4>
      <div className="btns flex-row">
        <button className="cud-btn">Edit</button>
        <button className="cud-btn">Delete</button>
        <button className="cud-btn">New</button>
      </div>
      <h4>{nextBtn}</h4>
    </nav>
  )
}

export default Navigation;