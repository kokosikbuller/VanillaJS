import './styles.css';
import temp from './templates/test.hbs'
import { fakeAPI } from './testAPI';
import { oneMovie } from './js/oneMovie';
import { loader } from './js/loader';

const root = document.getElementById('root')

root.innerHTML = oneMovie(fakeAPI);

// root.innerHTML = loader();



