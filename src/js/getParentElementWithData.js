const getParentElementWithData = ( node, datasetParam ) => {
  if (!node) return null;
  let targetNode = node;
  do {
    if (targetNode.dataset && targetNode.dataset[datasetParam] !== undefined) return targetNode;
    targetNode = targetNode.parentElement;
  } while (targetNode);
  return null;
};

export const getParentData = ( node, datasetParam ) => {
  const el = getParentElementWithData(node, datasetParam);
  if (!el) return null;
  const param = el.dataset[datasetParam];
  return param || null;
};

export default getParentElementWithData;
