function App() {

  return (
    <div className="bg-gray-100 min-h-dvh">
      <div className="px-8 py-12">
        <img className="h-10" src="src/assets/logo.svg" alt="Workcation" />
        <img
          className="mt-6 rounded-lg shadow-xl"
          src="src/assets/beach-work.jpg"
          alt="Woman workcationing on the beach"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          You can work from anywhere.{' '}
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-700">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4">
          <a href="#" className="bg-indigo-500 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-xs ">Book your escape</a>
        </div>
      </div>
    </div>
  );
}

export default App;
