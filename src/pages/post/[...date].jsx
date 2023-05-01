import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { date } = router.query;
  return <p>Post: {date?.join("/")}</p>;
};

export default Post;
