const RegisterDoctor = () => {

  return (
    <>
      <div className="w-full pl-24 ">
        <div className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image" type="text" placeholder="https://image.png"/>
          </div>

        </div>
      </div>
    </>
  );
}

export default RegisterDoctor;
