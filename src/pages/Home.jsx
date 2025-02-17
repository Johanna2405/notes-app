import { useOutletContext } from "react-router";

const Home = () => {
  const { userName, setUserName } = useOutletContext();
  return (
    <>
      <h1>{userName}</h1>
    </>
  );
};

export default Home;
