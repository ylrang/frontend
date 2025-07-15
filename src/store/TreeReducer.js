export const handleToggle = (nodes, id, expanded) => {
  return nodes.map((node) => {
    if (node.id === id) {
      return { ...node, isExpanded: expanded };
    }
    if (node.children) {
      return { ...node, children: handleToggle(node.children, id, expanded) };
    }
    return node;
  });
};
export const initNodes = (nodes, selected) => {
    for (const node of nodes) {
        console.log(node)
        node.isSelected = node.id===selected;
        node.isExpanded = false;
        if (node.children) {
            initNodes(node.children, selected);
            if (node.children.some((child) => child.isSelected)) {
                node.isSelected = true;
                node.isExpanded = true;
            } else {
                node.isExpanded = false;
            }
        }
    }
    console.log(nodes);
    return nodes;
}
export const handleSelect = (nodes, selected) => {
    for(const node of nodes) {
        console.log(node)
        node.isSelected = node.id===selected;
        if (node.children) {
            handleSelect(node.children, selected);
            if (node.children.some((child) => child.isSelected)) {
                node.isSelected = true;
            }
        }
    }
    console.log(nodes);
    return nodes;
}

const treeReducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case "INIT":
            return initNodes(action.data, action.selectedId);
        case "TOGGLE":
            return handleToggle(state, action.id, action.isExpanded);
        case "SELECT":
            return handleSelect(state, action.selectedId)
        default:
            return state;
    }
}
export default treeReducer;