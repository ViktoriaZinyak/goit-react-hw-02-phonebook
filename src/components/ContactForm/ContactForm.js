import React, { Component } from 'react';
import { Form } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // contactFormNameId = nanoid();

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onHandleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { number, name } = this.state;
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

export default ContactForm;
