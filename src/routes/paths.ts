import { useNavigate } from "react-router-dom";

export const Paths = {
    authtemplate: "/",
    clienttemplate: "/client",
    client: {
      book: "book",
      home:'home',
    
    },
    auth: {
      login: "login",
      register: "register",
      confirmaacount:"confirm"   
    },
    agencytemplate: "/agency",
    agency: {
      dahsboard: "",
   
    },

  };

export function useCustomNavigate() {
  const navigate = useNavigate();
  const customNavigate = (link: string) => {
    navigate(link);
    return true;
  };
  return customNavigate;
}