import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentlist: [
        {
          name: "hoang",
          phone: "1545",
          email: "13213fijsa@gmail.com",
        },
        {
          name: "seu",
          phone: "1545",
          email: "132ewqe13fijsa@gmail.com",
        },
      ],
      form: {
        name: "",
        phone: "",
        email: "",
      },
      isValid: false,
      indexSelected: -2,
    };
    this.handleChange = (e) => {
      this.setState(
        (state) => {
          const form = this.state.form;
          form[e.target.name] = e.target.value;
          return { form };
        },
        () => this.checkInvalidForm()
      );
    };
    this.handleSelect = (studentSelected, index) => {
      // console.log(studentSelected);
      // console.log(index);
      this.setState({
        form: {
          name: studentSelected.name,
          phone: studentSelected.phone,
          email: studentSelected.email,
        },
        indexSelected: index,
      });
    };
    this.checkInvalidForm = () => {
      const { name, phone, email } = this.state.form;
      //const value = name && phone && email;
      this.setState({
        isValid: true,
      });
    };
    this.handleSubmit = (e) => {
      e.preventDefault();

      if (this.state.isValid) {
        const newList = this.state.studentlist;
        // newList.push(this.state.form);
        if (this.state.indexSelected > -1) {
          //update student
          newList.splice(this.state.indexSelected, 1, this.state.form);
        } else {
          newList.push(this.state.form);
        }
        this.setState({
          studentlist: newList,
          form: {
            name: "",
            phone: "",
            email: "",
          },
          isValid: false,
          indexSelected: -2,
        });
        //console.log(this.state.studentlist);
      }
    };
    this.handleDelete = (id) => {
      const currentList = this.state.studentlist;
      currentList.splice(id, 1);
      //console.log(currentList);
      this.setState({
        studentlist: currentList,
        form: {
          name: "",
          phone: "",
          email: "",
        },
        isValid: false,
        indexSelected: -2,
      });
    };
  }
  render() {
    const { studentlist, form } = this.state;
    //console.log(this.state.studentlist);
    return (
      <div>
        <div>
          <h1>Student List</h1>
          <div>
            <label>Name: </label>
            <input name="name" value={form.name} onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone: </label>
            <input
              type="number"
              name="phone"
              value={form.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              name="email"
              value={form.email}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <table>
            <thead>
              <tr>
                {/* Tạo Table header Name, Phone, Email, Action */}
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {studentlist !== null
                ? studentlist.map((student, id) => (
                    <tr key={Math.random()}>
                      <td>{student.name}</td>
                      <td>{student.phone}</td>
                      <td>{student.email}</td>
                      <td>
                        <button
                          type="button"
                          onClick={(e) => this.handleSelect(student, id)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={(e) => this.handleDelete(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
