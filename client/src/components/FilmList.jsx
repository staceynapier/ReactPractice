import React from 'react';
import Film from './Film';

class FilmList extends React.Component {

  render() {
    const filmnodes = this.props.data.map((film, index) => {
      return(
        <Film filmName={film.filmName} key={index}>
          {film.showtimes}
        </Film>
      )
    })

    return(
      <section className="film-list">
        {filmnodes}
      </section>
    )
  }

}

export default FilmList;