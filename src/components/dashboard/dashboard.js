import React, { Component } from "react";
import { Row, Card, CardBody} from 'reactstrap';
class dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      groups: [] 
    };

  }


  render() {
    var data = sessionStorage.getItem('groups')
    console.log(data);
    return (
      <Row>
        {data.map(element => (
          <div className="col-md-4">
            <div className="card mt-4">
              <Card body inverse className="trasparentcolor">
                <CardBody>
                  <h3>{element.dn}</h3>
                </CardBody>
              </Card>
            </div>
          </div>
        ))
        }
      </Row>
    )

  }
}

export default dashboard;
