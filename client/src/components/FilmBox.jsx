import React from 'react';
import FilmList from './FilmList'

class FilmBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{
        filmName: "Sausage Party",
        showtimes: ["9:00", "12:00", "19:00"]
      },
      {
        filmName: "Cafe Society",
        showtimes: ["13:00", "16:00", "21:00"]
      }]
    }
  }

  render() {

    return(
      
      <div className="film-box">
        <FilmList data={this.state.data}/>
      </div>
      
    )

  }

}

export default FilmBox;