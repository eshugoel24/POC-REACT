import React from 'react';

class SearchQuickFilter extends React.Component {
    constructor(props) {
        super(props);
        this._handleSearchCategory = this._handleSearchCategory.bind(this);
    };
    _handleSearchCategory(e) {
        var val = this.refs.txtSearchQuickFilter.value;
        this.props.onSearchCategory(val);
    };
    render() {
        return (
            <div>
                <input  type='text' 
                        placeholder='Search in category' 
                        ref='txtSearchQuickFilter'
                        onChange={this._handleSearchCategory} />
            </div>
        );
    }
};

export default SearchQuickFilter;