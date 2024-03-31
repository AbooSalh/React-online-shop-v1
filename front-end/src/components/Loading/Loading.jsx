import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Loading(params) {
  return (
    <div
      className=""
    >
      <div className="icon">
        <FontAwesomeIcon icon={faSpinner} spin={true} className="" />
      </div>
    </div>
  );
}
