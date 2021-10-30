import { useHistory } from 'react-router-dom';

const CategorySelect = (props) => {
  const { selectedCategory, setSelectedCategory } = props;
  let history = useHistory();
  let formIsValid = false;

  const submitHandler = (event) => {
    event.preventDefault();

    console.log('selected category: ', selectedCategory);

    // Check form validity
    if (selectedCategory !== '') {
      formIsValid = true;
    }

    // If category is selected, go to next page
    if (formIsValid) {
      history.push('/app');
    } else {
      alert('Please select a subject category.');
    }
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label className="btn btn-light">
        <input
          type="radio"
          value="Featured_pictures_of_people"
          name="category"
          checked={selectedCategory === 'Featured_pictures_of_people'}
          onChange={handleInputChange}
        />
        <span>People</span>
      </label>
      <label className="btn btn-light">
        <input
          type="radio"
          value="Featured_pictures_of_architecture"
          name="category"
          checked={selectedCategory === 'Featured_pictures_of_architecture'}
          onChange={handleInputChange}
        />
        <span>Architecture</span>
      </label>
      <label className="btn btn-light">
        <input
          type="radio"
          value="Featured_pictures_of_landscapes"
          name="category"
          checked={selectedCategory === 'Featured_pictures_of_landscapes'}
          onChange={handleInputChange}
        />
        <span>Landscapes</span>
      </label>
      <button type="submit" className="btn btn-primary">
        Start
      </button>
    </form>
  );
};

export default CategorySelect;
