import { PropTypes } from 'prop-types'

let resortInputElement,
    dateInputElement,
    powderInputElement,
    backcountryInputElement;

const submit = (e) => {
    e.preventDefault();
    console.log("this.resortInputElement",resortInputElement.value);
    console.log("this.dateInputElement",dateInputElement.value);
    console.log("this.powderInputElement",powderInputElement.checked);
    console.log("this.backcountryInputElement",backcountryInputElement.checked);
}


export const AddDayForm = ({ resort, date, powder, backcountry }) => {

    return (<form className="add-day-form" onSubmit={submit}>
                <label htmlFor="resort"> Resort Name</label>
                <input ref={input => {resortInputElement = input}}
                    id="resort"
                    type="text"
                    defaultValue={resort} />

                <label htmlFor="date"> Date</label>
                <input id="date"
                    type="date"
                    defaultValue={date}
                    ref={input => {dateInputElement = input}}/>

                <label htmlFor="powder"> Powder Day</label>
                <input id="powder"
                    type="checkbox"
                    defaultChecked={powder}
                    ref={input => {powderInputElement = input}}/>

                <label htmlFor="backcountry"> Backcountry Day</label>
                <input id="backcountry"
                    type="checkbox"
                    defaultChecked={backcountry}
                    ref={input => {backcountryInputElement = input}}/>
                <button type="submit">Submit</button>
            </form>)
};


AddDayForm.defaultProps = {
    resort: "Hotel california",
    date: "2019-09-29",
    powder: true,
    backcountry: true
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}