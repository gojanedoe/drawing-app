import CategorySelect from './CategorySelect';

const Intro = (props) => {
  const { selectedCategory, setSelectedCategory } = props;

  return (
    <div className="container">
      <main>
        <h1>Welcome</h1>
        <p>Draw This! is an image reference generator for artists.</p>
        <p>
          Choose the subject you'd like to draw below, and click "Start" to
          begin.
        </p>
        <CategorySelect
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </main>
    </div>
  );
};

export default Intro;
