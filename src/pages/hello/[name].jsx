import { useRouter } from "next/router";

const Hello = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query);
  return <p>Hello: {name}</p>;
};

export default Hello;
