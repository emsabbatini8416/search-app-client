import Search from '../../components/Search';
import './SearchContainer.scss'

export function SearchContainer() {
  return (
    <div className="container">
      <div className="row height d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer