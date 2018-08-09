import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { resort, date, powder, backcountry } = this.props;
        return <form className="add-day-form">
                <label htmlFor="resort"> Resort Name</label>
                <input id="resort" type="text" defaultValue={resort} />

                <label htmlFor="date"> Date</label>
                <input id="date" type="date" defaultValue={date} />

                <label htmlFor="powder"> Powder Day</label>
                <input id="powder" type="checkbox" defaultChecked={powder} />

                <label htmlFor="backcountry"> Backcountry Day</label>
                <input id="backcountry" type="checkbox" defaultChecked={backcountry} />
            </form>
    }
}

AddDayForm.defaultProps = {
    resort: "Park Hotel",
    date: "2018-05-21",
    powder: false,
    backcountry: true
}

AddDayForm.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool.isRequired,
    backcountry: PropTypes.bool.isRequired
}