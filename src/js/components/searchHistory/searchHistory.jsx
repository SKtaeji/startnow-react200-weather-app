import React from "react";

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const { searchHistory } = this.props;
    console.log(searchHistory);

    return (
      <div className="card border-info mb-3">
        <div className="card-header text-blue bg-info">Search History</div>
        <div className="card-body">
          <table className="table">
            <tbody>
              {searchHistory.map(searchItem => {
                return (
                  <tr key={searchItem.id}>
                    <th scope="row">{searchItem.city}</th>
                    <td>
                      {searchItem.date}
                      <br />
                      {searchItem.time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
