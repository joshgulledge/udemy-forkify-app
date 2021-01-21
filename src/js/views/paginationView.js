import View from './view.js';
import icons from 'url:../../img/icons.svg';
import { RES_PER_PAGE } from '../config.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log('number of pages: ', numPages);
    //   page 1 with other pages
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1 with other pages';
    }
    // last page
    if (this._data.page === numPages && numPages > 1) {
      return 'the last page';
    }
    // other page
    if (this._data.page < numPages) {
      return 'some other page';
    }
    // page 1 no other pages
    return 'only one page';
  }
}

export default new PaginationView();
