import React from 'react';
import ReactDOM from 'react-dom';
import FilmBox from './components/FilmBox'
import FilmList from './components/FilmList'

window.addEventListener('load', function () {
  ReactDOM.render(
    <FilmBox />,
    document.getElementById('app')
  );
});
