import CategorySelect from './CategorySelect';

const Intro = () => {
  return (
    <div className="container">
      <main>
        <h1>Welcome</h1>
        <p>
          Draw This! is a drawing reference app. After choosing a topic, a
          selection of random photos will be generated.
        </p>
        <p>
          Choose the subject you'd like to draw below, and click "Start" to
          begin.
        </p>
        <CategorySelect />
      </main>
    </div>
  );
};

export default Intro;
