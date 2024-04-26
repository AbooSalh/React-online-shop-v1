import "./errorPage.css";
export default function Page404(params) {
  return (
    <>
      <div className="body">
        <div className="message"> are you sure ?</div>
        <div className="message2">
          the page you are accessing is not available
        </div>
        <div className="m-container">
          <div className="neon">404</div>
          <div className="door-frame">
            <div className="door">
              <div className="rectangle" />
              <div className="handle" />
              <div className="window">
                <div className="eye" />
                <div className="eye eye2" />
                <div className="leaf" />
              </div>
            </div>
          </div>
          <button onClick={()=> window.history.go(-1)} className="btn btn-primary w-100 mt-3">
            go back
          </button>
        </div>
      </div>
    </>
  );
}
