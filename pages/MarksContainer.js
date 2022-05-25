import React, { useState } from 'react';
import styles from '../styles/marks-cont.module.css';
import GroupComponent from './components/GroupComponent';
import MarksUpdater from './MarksUpdater';

const MarksContainer = ({ groups }) => {
  const [click, setClick] = useState(false);
  const [group, setGroup] = useState('');
  return (
    <section className={styles.cont}>
      {group === '' &&
        groups.map((element) => (
          <GroupComponent
            handleClick={(e) => clickHandler(e, element.groupNumber)}
            key={JSON.stringify(element.email)}
            group_number={element.groupNumber}
            branch={element.branch}
            division={element.division}
            setClick={setClick}
            click={click}
            setGroup={setGroup}
          />
        ))}
      {group !== '' && <MarksUpdater groupNumber={group} />}
    </section>
  );
};

export default MarksContainer;

export async function getServerSideProps() {
  // Fetch data from external API

  const res = await fetch('http://localhost:3000/api/Group/group?get=all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const groups = await res.json();

  // Pass data to the page via props
  return { props: { groups } };
}
