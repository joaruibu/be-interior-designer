import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/descarga-bloques-autocad");
  }, []);

  return null;
};

export default Home;
