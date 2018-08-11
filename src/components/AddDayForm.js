import { Component } from 'react'
import { PropTypes } from 'prop-types'

export class AddDayForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(){
        console.log("this.resortInputElement",this.resortInputElement.value);
        console.log("this.dateInputElement",this.dateInputElement.value);
        console.log("this.powderInputElement",this.powderInputElement.checked);
        console.log("this.backcountryInputElement",this.backcountryInputElement.checked);
    }
    render() {
        const { resort, date, powder, backcountry } = this.props;
        return <form className="add-day-form" onSubmit={this.submit}>
                <label htmlFor="resort"> Resort Name</label>
                <input ref={input => {this.resortInputElement = input}}
                       id="resort"
                       type="text"
                       defaultValue={resort} />

                <label htmlFor="date"> Date</label>
                <input id="date"
                       type="date"
                       defaultValue={date}
                       ref={input => {this.dateInputElement = input}}/>

                <label htmlFor="powder"> Powder Day</label>
                <input id="powder"
                       type="checkbox"
                       defaultChecked={powder}
                       ref={input => {this.powderInputElement = input}}/>

                <label htmlFor="backcountry"> Backcountry Day</label>
                <input id="backcountry"
                       type="checkbox"
                       defaultChecked={backcountry}
                       ref={input => {this.backcountryInputElement = input}}/>
                <button type="submit">Submit</button>
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