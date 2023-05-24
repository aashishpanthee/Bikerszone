import React,{useState} from "react";
import { Link } from "react-router-dom";

const TableWrapper = ({title,addlink,children}) => {

  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full px-4 mb-12">
      <div className="relative flex flex-col min-w-0 mb-6 break-words border-0 rounded-lg max-w-64 shadow-lg  bg-blueGray-100">
      <div className="px-2 py-2 mb-0 bg-white rounded-t">
        <div className="flex flex-wrap items-center">
          <div className="relative flex-1 flex-grow w-full max-w-full px-4">
            <h3 className="text-lg font-semibold text-blueGray-700">
              {title}
            </h3>
          </div>
          {addlink ? (
            <Link
            to={addlink}
            className="px-4 py-2 my-2 text-white bg-lightBlue-900 "
          >
            Add
          </Link>
          ):null}
        </div>
            {children}
            </div>
            </div>
      </div>
    </div>
  );
};

export default TableWrapper;
