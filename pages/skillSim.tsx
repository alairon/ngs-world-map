import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from '../components/navigation/NavBar';

function Stats(props){
  const { pathname, query, locale, isFallback} = useRouter();

  return(
    <div>
      <p>
        Current Path: {pathname}
        <br/>
        Language: {query.lang}
        <br/>
        skillID param: {query.skillID}
      </p>
    </div>
  )
}

export default function SkillSim({ skillsID }){
  const router = useRouter();
  
  return (
    <main>
      <Head>
        <title>PSO2:NGS Skill Simulator</title>
        <meta name="description" content="Phantasy Star Online 2 New Genesis (PSO2:NGS) Skill Simulator"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <NavBar content={{title: "Skill Simulator"}}/>
      <Stats/>
    </main>
  );
}
