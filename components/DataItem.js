import Link from "next/link";
import dataStyles from "../styles/data.module.css";

const DataItem = ({ data }) => {
  return <Link href="post/[id]" as={`/post/${data.id}`}>
  <a className={dataStyles.card}>
  <h3>{data.title} &rarr;</h3>
  <p>{data.excerpt}</p>
  </a></Link>;
};

export default DataItem;
