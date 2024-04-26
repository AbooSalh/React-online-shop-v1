import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { roleIdentifier } from "../../API/Api";

export default function Table({ headers, data, delItem, currentUser }) {
  const showCurrentUser = currentUser || false;
  const headerShow = headers.map((header) => {
    return <th key={header.key}>{header.label}</th>;
  });

  // handle show
  const dataShow = data.map((item) => {
    return (
      <tr key={item.id} id={item.id}>
        {headers.map((header) => {
          // get roles id from our object
          let getRole = (id, defaultValue = item[header.key]) =>
            roleIdentifier[id] || defaultValue;
          return (
            <td key={header.key}>
              {getRole(item[header.key])}{" "}
              {currentUser &&
                item[header.key] === showCurrentUser.name &&
                "(You)"}
            </td>
          );
        })}
        <td>
          {" "}
          <div className="d-flex align-items-center gap-2 justify-content-center">
            <Link to={`${item.id}`}>
              <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
            </Link>
            <FontAwesomeIcon
              fontSize={"19px"}
              color="red"
              icon={faTrash}
              cursor={"pointer"}
              onClick={() => delItem(item.id)}
            />
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table
      className="table table-striped table-hover table-bordered p-3"
      style={{
        width: "95%",
        margin: "20px auto ",
      }}
    >
      <thead>
        <tr>
          {headerShow}
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={headers.length + 1} className="text-center">
              {data.length === 0 && "loading..."}
            </td>
          </tr>
        ) : (
          dataShow
        )}
      </tbody>
    </table>
  );
}
