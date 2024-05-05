const Contact = () => {
  return (
    <div className="m-5 md:w-6/12 md:mx-auto p-5">
      <h1 className="text-4xl text-green-600 font-bold mb-10">
        We would love to hear from you.
      </h1>
      <form>
        <div className=" mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="outline outline-1 rounded-sm outline-gray-100 block w-10/12 h-10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="outline outline-1 rounded-sm outline-gray-100 block  w-10/12 h-10"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Message</label>
          <textarea className="outline outline-1 rounded-sm outline-gray-100 block  w-10/12 h-40"></textarea>
        </div>
        <button className="border border-green-600 p-2 text-green-600 rounded hover:text-white hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
