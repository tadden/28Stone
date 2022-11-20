import React from 'react';
import styles from './LiveWall.module.scss';

export default function LiveWall({ data }) {
  return (
    <div className={styles.LiveWall__Wrapper}>
      {data.map(
        ({ ticker, bid, ask, open, low, high, changes, date }, index) => (
          <div key={index}>
            <table className={styles.LiveWall__Table}>
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Bid</th>
                  <th>Ask</th>
                  <th>Open</th>
                  <th>Low</th>
                  <th>High</th>
                  <th>Chg %</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{ticker}</td>
                  <td>{bid}</td>
                  <td>{ask}</td>
                  <td>{open}</td>
                  <td>{low}</td>
                  <td>{high}</td>
                  <td
                    className={`${changes > 0 && styles.LiveWall__Green} ${
                      changes < 0 && styles.LiveWall__Red
                    }`}
                  >
                    {changes.toFixed(4)}%
                  </td>
                  <td>{date}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      )}
    </div>
  );
}
