import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useRouter } from "next/router";

export default function Home({ allPostsData }) {
  const router = useRouter();
  return (
    <ul className="text-center">
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link locale="zh" href={`/posts/${id}`}>
            {title}
          </Link>
          <br />
          <small>
            <Date dateISO={date} />
          </small>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
