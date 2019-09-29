export const transformToSelectOptions = (options) => {
  const result = [];
  const mappingRegions = {};
  console.log("options==",options);
  options.forEach(function(option) {
    const {
      projectName,
      id,
      deploymentRegions
    } = option;
    console.log("optionsoption==",option);
    const obj = {};
    obj.label = projectName;
    obj.value = projectName;
    result.push(obj);
    mappingRegions[projectName] = deploymentRegions.map(function(deploymentRegion) {
        return {
          "label":deploymentRegion,
          "value":deploymentRegion
        }
    });
  });
  return {
    options : result,
    regions : mappingRegions
  }
}
