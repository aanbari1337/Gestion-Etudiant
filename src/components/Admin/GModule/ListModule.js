import React, { Component } from "react";
import TableList from "../../Util/TableList";
import axios from "axios";
import URL from "../../../config/config";

const title = ["ID", "Module"];

class ListModule extends Component {
  
  state = {
    data: [],
  };
  componentDidMount() {
    const res = axios({
      method: "get",
      url: `${URL}/api/module/list`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) =>
        res.data.map((elm) =>
          this.setState({
            data: [...this.state.data, { id: elm.id, module: elm.libelle }],
          })
        )
      )
      .catch((err) => console.log(err));
  }
  render() {
    return <TableList url="/api/module/" type="MODULE" title={title} data={this.state.data} />;
  }
}

export default ListModule;
