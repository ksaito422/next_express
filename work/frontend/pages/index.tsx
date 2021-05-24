import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home = ({ data }: any) => {
  return (
    <>
      <p>aaa</p>
      {data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
    </>
  );
};

export async function getServerSideProps() {
  /**
   * // NOTE: expressとnextのDockerコンテナが別だから
   * `docker network inspect express_default`コマンドで
   * 表示されるGatewayのIPを直接指定
   */
  const res = await axios.get("http://172.31.0.1:8000/api/users");
  const data = await res.data;

  return { props: { data } };
}

export default Home;
