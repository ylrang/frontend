import React from "react";

const Dropdown = ( {item} ) => {
    console.log(item.dropdown)
    return (
        <>
        <li className="nav-item dropdown dropdown-hover">
            <a className="nav-link" href="#" id={item.title} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {item.label}
                <div className="arrow-down"></div>
            </a>
            <ul className="dropdown-menu dropdown-menu-center" aria-labelledby={item.title}>
                <li className="dropdown-header">{item.label}</li>
                {item.dropdown.map((dropdown) => (
                    <li key={dropdown.id}>
                        <a className="dropdown-item" href={dropdown.path}>
                        {dropdown.label}
                        </a>
                    </li>
                ))}
            </ul>
        </li>
        </>
    );
}

export default Dropdown;