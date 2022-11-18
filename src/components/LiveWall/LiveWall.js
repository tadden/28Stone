import React from 'react';

export default function LiveWall({ data }) {
  return (
    <div>
      {data.map(
        ({ ticker, bid, ask, open, low, high, changes, date }, index) => (
          <div key={index}>
            <table>
              <tr>
                <th>Pair</th>
                <th>Bid</th>
                <th>Ask</th>
                <th>High</th>
                <th>Low</th>
                <th>Chg %</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>{ticker}</td>
                <td>{bid}</td>
                <td>{ask}</td>
                <td>{open}</td>
                <td>{low}</td>
                <td>{high}</td>
                <td>{changes.toFixed(4)}%</td>
                <td>{date}</td>
              </tr>
            </table>
          </div>
        ),
      )}
    </div>
  );
}
