import React from "react";
import Cards from "../Components/Cards";
import list from "../../public/list.json"
import {Link} from "react-router-dom"
function Item() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Hello Every One <span className="text-pink-500">Welcome</span>{" "}
          </h1>
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            similique sint amet cumque optio perferendis officiis ipsam impedit
            debitis voluptas, nisi fuga omnis quo velit saepe ducimus autem.
            Officiis quae cum distinctio at ipsum. Totam eligendi consequuntur
            autem reiciendis cupiditate officia, architecto alias quos
            aspernatur?
          </p>
          <Link to="/">
          <button className="mg-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Item;
