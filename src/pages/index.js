import Head from "next/head";
import Sidebar from "../../components/sidebar"

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>
          Twitter
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        {
          /* sidebar*/
        }

        <Sidebar />
        {
          /* Feed */
        }
        {
          /* Widjets */
        }

        {
          // Modal using RecoilJS for managing state of twiter
        }
      </main>
    </div >
  )
}  