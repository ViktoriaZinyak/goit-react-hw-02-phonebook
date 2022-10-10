import React, { Component } from 'react';

class ContactForm extends Component {
  state = { name: '' };

  // contactFormNameId = nanoid();

  handleInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    // const contact = { name: e.target.value };
    // this.setState.contacts({ name: e.target.value });
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
