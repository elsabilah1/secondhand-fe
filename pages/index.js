import Head from 'next/head'
import Text from '../components/base/Text'
import InputField from '../components/base/InputField'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SecondHand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid h-screen place-items-center">
        <Text>Text sample</Text>
<<<<<<< HEAD
          <InputField 
            type="text"
            value=""
            placeholder="login"
            label="Login"
            name="login"
            onChange=""
          />
=======
        <Text type="heading/24" weight="bold">
          Masuk
        </Text>
>>>>>>> ca47bea2a22064075a576184e5f33dd0f577357a
      </div>
    </div>
  )
}
