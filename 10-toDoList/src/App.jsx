
import TheList from "./components/TheList";

function App() {
  return (
    <div className="bg-purple-500 min-h-svh  flex flex-col justify-center items-center pb-8">
      <h1 className="text-white text-3xl mb-4 text-center">To-Do List App</h1>
      <div className="w-3/4 max-w-md">
        {" "}
        {/* Limited width with max width */}
        <TheList />
      </div>
    </div>
  );
}

export default App;
