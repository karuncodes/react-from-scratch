import { Component } from 'react'
import { PropTypes } from 'prop-types'

let resortInputElement,
    dateInputElement,
    powderInputElement,
    backcountryInputElement;

const indianResorts = [
    "Eagle Motel",
    "Park Hotel",
    "Hotel California",
    "Beach Bubble",
    "Tramp Stamp Granny",
    "MountView Hotel"
]
class AutoComplete extends Component {
    get value() {
        return this.autoComp.value
    }
    set value(v) {
        this.autoComp.value = v;
    }
    render() {
        return <div>
                    <input ref={input => {this.autoComp = input}}
                        name="ac"
                        type="text"
                        list="indian-resorts" />
                    <datalist id="indian-resorts">
                        {this.props.options.map((option, i) => {
                            return <option key={i}>{option}</option>
                        })}
                    </datalist>
               </div>
    }
}

export const AddDayForm = ({ resort, date, powder, backcountry, onNewDay }) => {

    const submit = (e) => {
        e.preventDefault();
        onNewDay({
            resort: resortInputElement.value,
            date: dateInputElement.value,
            powder: powderInputElement.checked,
            backcountry: backcountryInputElement.checked
        });
        resortInputElement.value = '';
        dateInputElement.value = '';
        powderInputElement.checked = false;
        backcountryInputElement.checked = false;
    }

    return (<form className="add-day-form" onSubmit={submit}>
                <label htmlFor="resort"> Resort Name</label>
                <AutoComplete ref={input => {resortInputElement = input}}
                    options={indianResorts} />

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