function App() {
  return (
    <div className="bg-gray-100 min-h-dvh">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5 ">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl ">
          <img className="h-10" src="src/assets/logo.svg" alt="Workcation" />
          <img
            className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="src/assets/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
          <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl ">
            You can work from anywhere. 
            <br className="inline" /> 
            <span className="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm: text-xl">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="bg-indigo-500 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-xs sm:text-sm "
            >
              Book your escape
            </a>
          </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3 ">          
          <img className="absolute inset-0 w-full h-full object-cover object-center "
            src="src/assets/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
