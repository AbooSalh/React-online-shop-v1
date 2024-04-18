import axios from "axios";
import { useEffect } from "react";
import { GOOGLE_CALL_BACK, baseUrl } from "./Api";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function GoogleCallBack(params) {
  const location = useLocation();
  const [cookie, setCookie] = useCookies();
  const nav = useNavigate();
  useEffect(() => {
    async function googleCall() {
      try {
        const res = await axios.get(
          `${baseUrl}/${GOOGLE_CALL_BACK}${location.search}`
        );
        const token = res.data.access_token;
        setCookie("Bearer", token);
        nav("/dashboard" , {replace:true});
      } catch (e) {
        console.log(e);
      }
    }
    googleCall();
  });
}
