import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        .main {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          height: 100vh;
        }
        .container-button {
          display: flex;
          flex-direction: column;
        }
        .btn {
          margin: 5px;
          cursor: pointer;
        }
        .warning {
          height: 100px;
          background-color: yellow;
          margin: 5px;
          padding: 5px;
          border: 1px solid;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head>
        <title>landing</title>
      </Head>
      <main className="main">
        <div className="container-button">
          <Link href="/withoutbound">
            <button type="button" className="btn">
              Without handle error boundary
            </button>
          </Link>
          <Link href="/withbound">
            <button type="button" className="btn">
              With handle error boundary
            </button>
          </Link>
        </div>
        <div className="warning">
          <span>Notes, please check debugger for log error</span>
        </div>
      </main>
    </div>
  );
}
