import Header from "../../components/Header";
import { SimpleGrid } from "@mantine/core";
import LoginInput from "../../components/Login/LoginInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      email: "",
      password: "",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`https://myminefield.site/login`)
      .then((res) => {
        const { data } = res;
        if (typeof data === "string") {
          console.log({
            title: "Login Failed",
            message: data,
            color: "red",
            autoClose: 3000,
          });
        } else {
          console.log({
            title: "Login Successful",
            message: "Hey there! Welcome back to Story Six3",
            color: "green",
            autoClose: 3000,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log({
          title: "Login Failed",
          message: message,
          color: "red",
          autoClose: 3000,
        });
      });
  };
  return (
    <>
      <Header />
      <SimpleGrid
        className="lg:grid-col lg:mt-11 m-5 shadow-2xl rounded-2xl"
        onSubmit={(e) => handleSubmit(e)}
        breakpoints={[
          { minWidth: "sm", cols: 1 },
          { minWidth: "lg", cols: 2 },
        ]}
      >
        <div className="my-7 sm:py-2">
          <h1 className="text-center font-bold text-[#56BBF1] space-x-4 text-2xl">
            <span className="space-x-2 font-montserrat text-bold">L</span>
            <span className="space-x-2 font-montserrat text-bold">O</span>
            <span className="space-x-2 font-montserrat text-bold">G</span>
            <span className="space-x-2 font-montserrat text-bold">I</span>
            <span className="space-x-2 font-montserrat text-bold">N</span>
          </h1>
          <LoginInput />
        </div>
        <div className="bg-[#56BBF1] text-white text-center lg:rounded-lg rounded-b-lg ">
          <h1 className="my-32 font-montserrat italic text-lg sm:text-3xl">
            WELCOME TO
            <div className="mt-11 sm:py-2">
              <h1 className="font-montserrat text-white text-lg lg:text-3xl ">
                <span className="italic">STOR</span>
                <span className="font-extrabold">Y</span>
                <span className="italic">SiX</span>
                <span className="font-extrabold">3</span>
              </h1>
            </div>
          </h1>
        </div>
      </SimpleGrid>
    </>
  );
}
export default Login;
