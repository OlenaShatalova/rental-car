import { Link } from 'react-router-dom';

function CatalogPage() {
  return (
    <div>
      <h1>Welcome to Rental</h1>
      <Link to="/">
        <button>home</button>
      </Link>
    </div>
  );
}

export default CatalogPage;
