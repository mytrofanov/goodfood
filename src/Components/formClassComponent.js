import React from 'react'

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        let name = props.name;
        let nameIsValid = this.validateName(name);
        let age = props.age;
        let ageIsValid = this.validateAge(age);
        this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};

        this.onNameChange = this.onNameChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateAge(age){
        return age>=0;
    }
    validateName(name){
        return name.length>2;
    }
    onAgeChange(e) {
        let val = e.target.value;
        let valid = this.validateAge(val);
        this.setState({age: val, ageValid: valid});
    }
    onNameChange(e) {
        let val = e.target.value;
        console.log(val);
        let valid = this.validateName(val);
        this.setState({name: val, nameValid: valid});
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.nameValid ===true && this.state.ageValid===true){
            alert(`Имя: ${this.state.name} Возраст: ${this.state.age}`);
        }
    }

    render() {
        // цвет границы для поля для ввода имени
        let nameColor = this.state.nameValid===true?"green":"red";
        // цвет границы для поля для ввода возраста
        let ageColor = this.state.ageValid===true?"green":"red";
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Имя:</label><br />
                    <input type="text" value={this.state.name}
                           onChange={this.onNameChange} style={{borderColor:nameColor}} />
                </p>
                <p>
                    <label>Возраст:</label><br />
                    <input type="number" value={this.state.age}
                           onChange={this.onAgeChange}  style={{borderColor:ageColor}} />
                </p>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default UserForm;
