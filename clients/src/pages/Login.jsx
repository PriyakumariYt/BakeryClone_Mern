
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../ContextApi/TokenApi';
import { toast } from "react-toastify";
const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
      });
    const {storeTokenInLS} = useAuth()
      const navigate = useNavigate();
    
      // let handle the input field value
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
          const response = await fetch("https://bakery-clone-mern.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            // console.log("after login: ", responseData);
            // alert("login succesfull")
            toast.success("Login Successfull")
        storeTokenInLS(responseData.token);
           
            navigate("/");
          }else{
            toast.error("Login error")
          }
        } catch (error) {
    
          console.log(error);
        }
      };
    

  return (
    <>
       <section>
        <main className="main-container">
          <div className="section-registration">
            <div className="container-second">
              <div className="blur_img">
                <img
                  src="image/Birthday cake-amico.png"
                  alt="a nurse with a cute look"
                  width="600"
                  height="500"
                />
             
              </div>
           
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading ">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
               
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
             
             
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                Login
                  </button>
                </form>
              </div>
              </div>
           
          </div>
        </main>
      </section>
    </>
  )
}

export default Login
