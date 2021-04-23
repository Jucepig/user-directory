function Navigation (props) {
  const prevBtn = "< Previous"
  const nextBtn = "Next >"
  return(
    <nav className="navigation flex-row">
      <button disabled={props.index === 0} className="change-user-btn" onClick={() => props.decIndex()}>{prevBtn}</button>
      <div className="btns flex-row">
        <button className="cud-btn">Edit</button>
        <button className="cud-btn">Delete</button>
        <button className="cud-btn">New</button>
      </div>
      <button disabled={props.index === 24} className="change-user-btn" onClick={() => props.incIndex()}>{nextBtn}</button>
    </nav>
  )
}

export default Navigation;