import { useHistory } from 'react-router-dom';

const CategorySelect = () => {
  let history = useHistory();
  let formIsValid = false;

  const submitHandler = (event) => {
    event.preventDefault();
    history.push('/app');
  };

  return (
    <form onSubmit={submitHandler}>
      <label className="btn btn-light">
        <input type="checkbox" value="1" />
        <span>People</span>
      </label>
      <label className="btn btn-light">
        <input type="checkbox" value="1" />
        <span>Animals</span>
      </label>
      <label className="btn btn-light">
        <input type="checkbox" value="1" />
        <span>Landscapes</span>
      </label>
      {/* <div className="container text-center"> */}
      <button type="submit" className="btn btn-primary">
        Start
      </button>
      {/* </div> */}
    </form>
  );
};

export default CategorySelect;
