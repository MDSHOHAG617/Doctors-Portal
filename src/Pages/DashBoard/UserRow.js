import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const makeAdmin = () => {
    fetch(`https://intense-fjord-49146.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      Headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("successfully made an admin");
      });
  };
  const { email, role } = user;
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove user</button>
      </td>
    </tr>
  );
};

export default UserRow;
