import React from 'react';
import styles from '../styles/timetable.module.css';

const Timetable = () => {
  return (
    <section className={styles.cont}>
      <svg className={styles.svg} viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            PLEASE SELECT AN OPTION
          </text>
        </symbol>

        <g class="g-ants">
          <use xlinkHref="#s-text" className={styles.text_copy}></use>
          <use xlinkHref="#s-text" className={styles.text_copy}></use>
          <use xlinkHref="#s-text" className={styles.text_copy}></use>
          <use xlinkHref="#s-text" className={styles.text_copy}></use>
          <use xlinkHref="#s-text" className={styles.text_copy}></use>
        </g>
      </svg>
      <ul>
        <li>
          <a href="/components/TimetableViewer">TIMETABLE VIEWER</a>
        </li>
        <li>
          <a href="/components/TimetablePlanner">TIMETABLE PLANNER</a>
        </li>
      </ul>
    </section>
  );
};

export default Timetable;