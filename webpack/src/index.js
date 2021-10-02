import './styles.css';
import temp from './templates/test.hbs'

const root = document.getElementById('root')

const markup = temp({
  firstname: "Yevgenii",
  lastname: "Shevchenko",
});

root.innerHTML = markup;


