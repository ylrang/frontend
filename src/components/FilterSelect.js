import { useEffect, useRef } from "react";
const { Choices } = window;

const FilterSelect = ({id, value, onChange, children }) => {
    const choicesEl = useRef(null);
    useEffect(() => {
        const instance = new Choices(choicesEl.current, {
            searchEnabled: true,
            shouldSort: false,
            itemSelectText: "",
        });
        return () => {
            instance.destroy();
        }
    }, []);
    return (
        <select class="form-select" data-trigger id={id} ref={choicesEl} value={value} onChange={(e) => onChange(e.target.value)}>
            {children}
        </select>
    )
}
export default FilterSelect;