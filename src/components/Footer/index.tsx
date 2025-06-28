import React from 'react'
import "./style.css";

class Footer extends React.Component {
  render() {
    return (
      <div className='container-footer'>
        <h4>Sistema World Beauty</h4>
        <div className='container-icons'>
          <a href="https://github.com/raphaelamonteiro" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-github fa-xl" style={{ color: "#401D10" }}></i>
          </a>
          <a href="https://www.linkedin.com/in/raphaelamonteiro/" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl" style={{ color: "#401D10" }}></i>
          </a>
          <br></br>
          <p> © 2025 - Raphaela Monteiro </p>
        </div>

      </div>
    )
  }
}

export default Footer;