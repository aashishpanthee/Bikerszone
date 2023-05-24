import React, { useState } from "react";
import UserTable from "../User/UserTable";
import TableWrapper from "../../common/TableWrapper";

const User = () => {
  return (
    <TableWrapper title='User' addlink='/admin/user/add'>
      <UserTable />
    </TableWrapper>
  );
};

export default User;
