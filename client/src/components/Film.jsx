import React from 'react';

class Film extends React.Component {

  render() {
    return(
      <section className="film">
        <h3> {this.props.filmName} </h3> <p> {this.props.children} </p>
        
      </section>
    )
  }

}

export default Film;