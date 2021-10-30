import { Link } from 'react-router-dom';

const CategorySelect = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <Link to="/app" className="btn btn-light">
        Start
        {/* <input
          type="submit"
          onClick={submitHandler}
          value="Start"
          className="btn btn-light"
        ></input> */}
      </Link>
    </form>
  );
};

export default CategorySelect;
