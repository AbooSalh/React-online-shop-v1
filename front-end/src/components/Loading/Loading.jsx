import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loading.css"
export default function Loading(params) {
  return (
    <div className="loader">
      <div className="icon">
        <FontAwesomeIcon icon={faSpinner} spin={true} className="" size="3x"/>
      </div>
    </div>
  );
}
