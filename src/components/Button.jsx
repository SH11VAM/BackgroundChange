function Button({ myArr, changer }) {
  const updateColor = (element) => {
    changer(element.value);
  };
  return (
    <>
      <div className="w-[70vw] h-[10vh] border-4 border-double border-slate-500 rounded-lg">
        {myArr.map((element, index) => (
          <button
            className={`px-8 py-3 font-bold ${element.value} mx-3 mt-1 rounded-full`}
            key={index}
            onClick={() => updateColor(element)}
          >
            {element.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default Button;
