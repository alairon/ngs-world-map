import Head from 'next/head';
import NavBar from '../../components/navigation/NavBar';

export default function SkillSim(){
  return (
    <main>
      <Head>
        <title>PSO2:NGS Skill Simulator</title>
        <meta name="description" content="Phantasy Star Online 2 New Genesis (PSO2:NGS) Skill Simulator"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <NavBar content={{title: "Skill Simulator"}}/>
    </main>
  );
}
