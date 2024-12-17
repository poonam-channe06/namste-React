const Contact = () => {
  return (
    <div className="">
      <h2 className="font-bold text-2xl p-4 m-4">Contact Us page </h2>
      <form>
        <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="name"/>
        <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="message"/>
        <button className="border border-black p-2 m-4 rounded-md bg-green-500">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
