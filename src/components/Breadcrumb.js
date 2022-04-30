function Breadcrumb() {


  return (
    <nav>
        <ol className="d-flex">
            <li className="text-dark text-small ls-none m-1">Home</li>
        <li className="text-dark m-1 text-small ls-none">/</li>
            <li className="text-dark text-small ls-none m-1">link1</li>
        <li className="text-dark m-1 text-small ls-none">/</li>
            <li className="text-dark text-small ls-none m-1">lin2</li>
        <li className="text-dark m-1 text-small ls-none">/</li>
            <li className="text-dark text-small ls-none m-1">link3</li>
        <li className="text-dark m-1 text-small ls-none">/</li>
            <li className="text-dark text-small ls-none m-1">link4</li>
        <li className="text-dark m-1 ls-none text-small">/</li>
        <li className="text-dark text-small ls-none m-1" aria-current="page">Data</li>
        </ol>
    </nav>
  );
}

export default Breadcrumb;
