import React from 'react';
import DualListBox from 'react-dual-listbox';

const options = [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
];

class Pingo extends React.Component {
    state = {
        selected: ['one'],
    };

    onChange = (selected) => {
        this.setState({ selected });
    };

    render() {
        const { selected } = this.state;

        return (
            <DualListBox
                options={options}
                selected={selected}
                onChange={this.onChange}
            />
        );
    }
}
export default Pingo;