import React, { useState, useEffect } from "react";
import * as pbi from "powerbi-client";
import axios from "axios";

const PowerBI = () => {
  const [accessToken, setAccessToken] = useState("");
  const [report, setReport] = useState(null);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    // Retrieve the access token from the backend API
    axios.get("http://localhost:8080/access-token").then((response) => {
      setAccessToken(response.data);
    });
  }, []);

  useEffect(() => {
    if (accessToken) {
      // Embed a Power BI report using the access token
      const config = {
        type: "report",
        accessToken: accessToken,
        embedUrl: "https://app.powerbi.com/reportEmbed",
        id: "REPORT_ID_HERE",
        permissions: pbi.models.Permissions.All,
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: true,
        },
      };
      const report = new pbi.Report(document.getElementById("reportContainer"), config);
      setReport(report);

      // Embed a Power BI dashboard using the access token
      const dashboardConfig = {
        type: "dashboard",
        accessToken: accessToken,
        embedUrl: "https://app.powerbi.com/dashboardEmbed",
        id: "DASHBOARD_ID_HERE",
        permissions: pbi.models.Permissions.All,
        settings: {
          filterPaneEnabled: true,
          navContentPaneEnabled: true,
        },
      };
      const dashboard = new pbi.Dashboard(document.getElementById("dashboardContainer"), dashboardConfig);
      setDashboard(dashboard);
    }
  }, [accessToken]);

  return (
    <div>
      <h2>Power BI Report</h2>
      <div id="reportContainer"></div>
      <h2>Power BI Dashboard</h2>
      <div id="dashboardContainer"></div>
    </div>
  );
};

export default PowerBI;


