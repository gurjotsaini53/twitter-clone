import Head from "next/head";
//below code to import sidebar from the components folder
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

      <main className="bg-black min-h-screen">

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