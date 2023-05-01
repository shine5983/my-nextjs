import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
function Home() {
  const router = useRouter();
  const handleRouteChange = (url) => {
    router.push(url);
  };
  const [counters, setCounters] = useState([]);
  useEffect(() => {
    console.log(router.query.counter);
    if (router.query.counter) {
      setCounters((prev) => [...prev, parseInt(router.query.counter)]);
    }
  }, [router.query.counter]);

  const handleClick = () => {
    const counter = counters[counters.length - 1] + 1;
    router.push(`/?counter=${counter}`, undefined, { shallow: true });
  };
  return (
    <ul>
      {/* next v13 no need to use <a> tag */}
      <li>
        <Link href="/post/123">切換至 pages/post/[postId].tsx</Link>
      </li>
      <li>
        <Link href={{ pathname: "/hello/[name]", query: { name: "Wenny" } }}>
          切換至 page/hello/[name].tsx
        </Link>
      </li>
      {/* Imperatively routing */}
      <li>
        <button onClick={() => handleRouteChange(`/hello/Wenny`)}>
          Go to Hello Wenny
        </button>
      </li>
      {/* Shallow routing: you can only use this in the same url */}
      <li>
        <button onClick={handleClick}>add counter</button>
        <ul>
          {counters?.map((counter) => (
            <li key={counter}>{counter}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default Home;
