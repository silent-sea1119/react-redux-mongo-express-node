import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticatd) {
            this.props.history.push('/dashboard');
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }


    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h1 className="display-4 text-center">Sign Up</h1>
                                <p className="lead text-center">Create your DevConnector account</p>
                                <form noValidate onSubmit={this.onSubmit}>

                                    <div className="form-group">
                                        <input
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.name
                                            })}
                                            value={this.state.name}
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            onChange={this.onChange} />
                                        {errors.name && (
                                            <div className="invalid-feedback">{errors.name}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.email
                                            })}
                                            value={this.state.email}
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            onChange={this.onChange} />
                                        <small
                                            className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email
                                            </small>
                                        {errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.password
                                            })}
                                            value={this.state.password}
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={this.onChange} />
                                        {errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <input
                                            className={classnames('form-control form-control-lg', {
                                                'is-invalid': errors.password2
                                            })}
                                            value={this.state.password2}
                                            type="password"
                                            placeholder="Confirm Password"
                                            name="password2"
                                            onChange={this.onChange} />
                                        {errors.password2 && (
                                            <div className="invalid-feedback">{errors.password2}</div>
                                        )}
                                    </div>

                                    <input type="submit" className="btn btn-info btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));