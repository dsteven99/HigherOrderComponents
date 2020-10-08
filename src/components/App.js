import React from 'react';
import {connect} from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import {updateSignin} from 'actions/index';

class App extends React.Component {

    renderMenu = () => {
        return (
            <div>
                <Link style={{padding: "15px"}} to="/">Home</Link>
                <Link style={{padding: "15px"}} to="/post">Post</Link>
                <button onClick={() => this.props.updateSignin(!this.props.auth)}>
                    {this.props.auth ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        );
    };

    render(){
        return (
            <BrowserRouter>
                {this.renderMenu()}
                <Route path="/post" exact component={CommentBox} />
                <Route path="/" exact component={CommentList} />
            </BrowserRouter>
        );
    } 
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {updateSignin})(App);