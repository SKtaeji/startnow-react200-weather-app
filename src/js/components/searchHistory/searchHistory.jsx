import React from 'react';

export default class SearchHistory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='card border-info mb-3'>
              <div className='card-header text-blue bg-info'>Search History</div>
                <div className='card-body'>
                    <table className='table'>
                      <tbody>
                        <tr>
                            <th scope="row">San Diego</th>
                            <td>04/28/2016 19:04:46</td>
                        </tr>
                        <tr>
                            <th scope="row">New York</th>
                            <td>04/28/2016 19:04:48</td>
                        </tr>
                        <tr>
                            <th scope="row">Washington D.C</th>
                            <td>04/28/2016 19:04:49</td>
                        </tr>
                        <tr>
                            <th scope="row">London</th>
                            <td>04/28/2016 19:04:50</td>
                        </tr>
                        <tr>
                            <th scope="row">Tokyo</th>
                            <td>04/28/2016 19:04:51</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
        );
    }
}