// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";


// // const SidebarItem = ({node, expanded, selected, handleToggle}) => {
// //     const isExpanded = expanded.includes(node.name)
// //     const isSelected = selected.includes(node.name)
// //     const isLeaf = !node.children || node.children.length === 0;
// //     const navigate = useNavigate();

// //     const handleLink = (name) => {
// //         navigate(`/fep-list/${name}`)
// //     }

// //     return(
// //         <li class="py-1">
// //             {isLeaf ? (
// //                 <a class={`me-2 sidebar-link${isSelected ? " active": ""}`}>
// //                     <div class="sidebar-icon"></div>
// //                     <div onClick={() => handleLink(node.name)}>{node.index_num}.&nbsp;&nbsp;{node.name}</div>
// //                 </a>
// //             ) : (
// //                 <>
// //                 <a class={`me-2 sidebar-link${isSelected ? " active": ""}`} data-bs-toggle="collapse" data-bs-target={node.name} aria-expanded={isExpanded}>
// //                     <div class="sidebar-icon">
// //                         <i class="uil uil-angle-right-b" onClick={handleToggle}></i>
// //                     </div>
// //                     <div onClick={() => handleLink(node.name)}>{node.index_num}.&nbsp;&nbsp;{node.name}</div>
// //                 </a>
// //                 <div class={`collapse${isExpanded ? " show": ""}`} id={node.name}>
// //                     <ul class="list-unstyled mb-0 mt-2 ms-3 sidebar-collapse">
// //                         {node.children.map((child)=> (
// //                             <SidebarItem key={node.id} node={child} activeItems={activeItems}/>
// //                         ))}
// //                     </ul>
// //                 </div>
// //                 </>
// //             )}
// //         </li>
// //     );
// // }

// const SidebarItem = ({node, expanded, selected}) => {
//     const isExpanded = expanded.includes(node.name);
//     const isSelected = selected.includes(node.name);
//     const isLeaf = !node.children || node.children.length === 0;
//     const navigate = useNavigate();

//     const handleLink = (name) => {
//         navigate(`/fep-list/${name}`)
//     }

//     return(
//         <li class="py-1">
//             {isLeaf ? (
//                 <a class={`me-2 sidebar-link${isSelected ? " active": ""}`}>
//                     <div class="sidebar-icon"></div>
//                     <div onClick={() => handleLink(node.name)}>{node.index_num}.&nbsp;&nbsp;{node.name}</div>
//                 </a>
//             ) : (
//                 <>
//                 <a class={`me-2 sidebar-link${isSelected ? " active": ""}`} data-bs-toggle="collapse" data-bs-target={node.name} aria-expanded={isExpanded}>
//                     <div class="sidebar-icon">
//                         <i class="uil uil-angle-right-b" onClick={handleToggle}></i>
//                     </div>
//                     <div onClick={() => handleLink(node.name)}>{node.index_num}.&nbsp;&nbsp;{node.name}</div>
//                 </a>
//                 <div class={`collapse${isExpanded ? " show": ""}`} id={node.name}>
//                     <ul class="list-unstyled mb-0 mt-2 ms-3 sidebar-collapse">
//                         {node.children.map((child)=> (
//                             <SidebarItem key={node.id} node={child} activeItems={activeItems}/>
//                         ))}
//                     </ul>
//                 </div>
//                 </>
//             )}
//         </li>
//     );
// }
// const Sidebar = (props) => {
//     const { data, expanded, selected, handleToggle, handleSelect, children } = props;
    
//     const renderMenu = (nodes) => {
//         if (!nodes || nodes.length === 0) {
//             return null;
//         }
//         for (const node in nodes) {
//             return <SidebarItem key={nodes.id} node={node} expanded={expanded} selected={selected} handleToggle={handleToggle}/>
//         }
//     }

//     return (
//         <ul class="list-unstyled mb-0 mt-3">
//            {children}
//         </ul>
//     )
// }
// export default Sidebar;


// const SidebarMenu = (props) => {
//     const { data } = props;
//     const [expanded, setExpanded] = useState([]);
//     const [selected, setSelected] = useState([]);
//     const [selectedNode, setSelectedNode] = useState();
//     const [tree, setTree] = useState();
//     const [activeItems, setActiveItems] = useState([]);
//         // const { params } = useParams();

//     useEffect(() => {
//         setTree(() => data)
//     }, [data]);

//     const findPathToNode = (data, target, path = []) => {
//         for (const node of data) {
//             const newPath = [...path, node.name];
//             if (node.name === target) {
//                 console.log(newPath)
//                 return newPath
//             };
//             if (node.children) {
//                 const result = findPathToNode(node.children, target, newPath);
//                 if (result) {
//                     console.log(result)
//                     return result;
//                 }
//             }
//         }
//         return [];
//     }
//     const handleSelect = (node) => {
//         let selectedTemp = findPathToNode(tree, node)
//         setSelected(selectedTemp);
//     }
//     const handleToggle = (node) => {
//         let expandedTemp = findPathToNode(tree, node)
//         setSelected(expandedTemp);
//     }
//     return (
//         <Sidebar data={tree} expanded={expanded} selected={selected} handleToggle={handleToggle} handleSelect={handleSelect}>
            
//         </Sidebar>
//     )
// }