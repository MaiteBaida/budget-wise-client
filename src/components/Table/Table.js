import './Table.scss';

function Table () {
    return (
        <section class='table'>
            <div class='table__row'>
                <div class='table__header-cell'>Header 1</div>
                <div class='table__header-cell'>Header 2</div>
                <div class='table__header-cell'>Header 3</div>
            </div>
            <div class='table__row'>
                <div class='table__cell'>Data 1</div>
                <div class='table__cell'>Data 2</div>
                <div class='table__cell'>Data 3</div>
            </div>
        </section>
    );
}

export default Table;