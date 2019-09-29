import React, {Component} from 'react';
import * as utils from "./utils";
import Select from "../../common/select";
import Table from "../../common/table";
import * as config from "./config";

class Deployment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "projects" : [],
      "regions" : {},
      "selectedProject" : "",
      "selectedRegion" : "",
      "selectedRegions" : [],
      "deployments" : []
    }
    this.selectProject = this.selectProject.bind(this);
    this.selectRegion = this.selectRegion.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.onAction = this.onAction.bind(this);
  }

  componentDidMount() {
    fetch("https://deployment-history.aulisius.now.sh/api/projects").then((response) => {
        return response.json();
    }).then((results) => {
      const {
        projects
      } = results;
      const values = utils.transformToSelectOptions(projects);
      const {
        options,
        regions
      } = values;
      console.log("this==", this);
      const selectedId  = options.length ? options[0].value : 0;
      this.setState({"projects" : options , "regions" : regions, "selectedProject": selectedId, "selectedRegions" : regions[selectedId]});
    });

    fetch("https://deployment-history.aulisius.now.sh/api/deployments").then((response) => {
      return response.json();
    }).then((result) => {
      const {
        deploymentHistory
      } = result
      this.setState({"deployments" : deploymentHistory});
    });
  }

  selectProject(value) {
    const {
      regions
    } = this.state;
    console.log("In Select habnde==", value);
    this.setState({"selectedProject" : value});
    this.setState({"selectedRegions" : regions[value]});
  }

  selectRegion(value) {
    this.setState({"selectedRegion" : value});
  }

  handleOnSubmit() {
    const {
      selectedProject,
      selectedRegion
    } = this.state;
    const payload = {
      "projectName": selectedProject,
      "deploymentRegion": selectedRegion
    };
    const requestPayload = {
      "method" : "POST",
      "body" : JSON.stringify(payload),
      "header" : {
        "Content-Type" : "application/json"
      }
    };
    fetch("https://deployment-history.aulisius.now.sh/api/deployments", requestPayload).then((response) => {
      return response.json();
    }).then((result) => {
      const {
        deployments
      } = this.state;
      this.setState({"deployments" : [...deployments, ...[result] ]});
    });
  }

  onAction(id, actionSelected) {
      console.log("on actions", id, actionSelected);
      const action  = actionSelected === "RETRY" ? "PUT" : "DELETE";
      let requestPayload = {
        method: action,
        body: JSON.stringify({"id": id})
      };
      //return;
    fetch(`https://deployment-history.aulisius.now.sh/api/deployments?id=${id}`, requestPayload).then((response) => {
      return response.json();
    }).then((result) => {
      console.log("reposen on add", result);
      const  {
        status
      } = result;
     // if(status === "success") {
        const {
          deployments
        } = this.state;
        console.log("status filteredDeployments==", status);
        if(actionSelected === "RETRY") {
          const retryIndex = deployments.findIndex(function(deployment) {
            return deployment.id === id;
          });
          deployments[retryIndex] = result;
          this.setState({"deployments" : deployments});
        } else {
          const filteredDeployments = deployments.filter(function(deployment) {
            return deployment.id !== id;
          });
          console.log("filteredDeployments==", filteredDeployments);
          this.setState({"deployments" : filteredDeployments});
        }
      //}
    });
  }

  render () {
    const {
      projects,
      selectedRegions,
      selectedProject,
      selectedRegion,
      deployments
    } = this.state;
    console.log("this.state==", this.state);
    return (
      <>
      <h1>Project to deploy</h1>
      <Select
        items={projects}
        handleOnSelect={this.selectProject}
        placeholder="Select projects"/>
      <h1>Choose deployment region</h1>
      <Select
        items={selectedRegions}
        handleOnSelect={this.selectRegion}
        placeholder="Select regions"/>
        {
          selectedProject && selectedRegion &&
          <button
            onClick={this.handleOnSubmit}
          >Add</button>
        }
        <Table
          config={config.tableConfig}
          rows={deployments}
          onAction={this.onAction}
        />
        </>
    );
  }
}

export default Deployment;
