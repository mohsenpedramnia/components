import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(records => (
        <li key={records.id}>{records.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
