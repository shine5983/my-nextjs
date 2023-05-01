import { useRouter } from "next/router";

const Hello = () => {
  const router = useRouter();
  const { helloId } = router.query;
  console.log(router.query);
  return <p>Post: {helloId}</p>;
};

export default Hello;
