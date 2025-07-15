import React from "react";
import { useTreeState } from "../hooks/useTreeState";
import { Link, useNavigate } from "react-router-dom";

const TreeNode = React.memo(({ node }) => {
    const { dispatch } = useTreeState();
    const isLeaf = !node.children || node.children.length === 0;
    const navigate = useNavigate();
    
    const handleClick = () => {
        dispatch({type:"SELECT", selectedId: node.id})
        navigate(`/fepdocs/${node.id}`);
    }

    return (
        <li class="py-1">
            <div class={`sidebar-item d-flex align-items-center${node.isSelected ? " active": ""}`}>
                {isLeaf ? (
                    <a class={`sidebar-button`}>
                        <div class="sidebar-icon"></div>
                    </a>
                ): (
                    <a class={`sidebar-button`} data-bs-toggle="collapse" data-bs-target={node.name} aria-expanded={node.isExpanded} onClick={() => dispatch({type:"TOGGLE", id: node.id, isExpanded: !node.isExpanded})}>
                        <div class="sidebar-icon">
                            <i class="uil uil-angle-right-b"></i>
                        </div>
                    </a>
                )}
                <a class="sidebar-link" onClick={handleClick}>{node.index_num}.&nbsp;&nbsp;{node.name}</a>
            </div>
            {!isLeaf && (
            <div class={`collapse${node.isExpanded ? " show": ""}`} id={node.name}>
                 <ul class="list-unstyled mb-0 mt-2 ms-3 sidebar-collapse">
                    {node.children.map((child)=> (
                        <TreeNode key={child.id} node={child}/>
                    ))}
                </ul>
            </div>
            )}
        </li>
    )
})
const TreeView = ({ data }) => {
    return (
        <ul class="list-unstyled mb-0 mt-3">
            {data.map((node) => (
                <TreeNode key={node.id} node={node} />
            ))}
        </ul>
    )
}
export default TreeView;