const Collapse = ({item}) => {
    return (
    <div class="accordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id={`heading-${item.id}`}>
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {item.field_name}
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                {item.content}
            </div>
            </div>
        </div>
    </div>
    )
}
export default Collapse;