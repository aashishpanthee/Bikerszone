import React, { useState } from "react";
import TableWrapper from "../../common/TableWrapper";
import BikeTable from "./BikeTable";
import AddEditWrapper from "../../common/AddEditWrapper";

const Bike = () => {
  return (
    <TableWrapper title='Total Bikes' addlink='/dashboard/bikes/add'>
      <BikeTable />
    </TableWrapper>
  );
};

export default Bike;
