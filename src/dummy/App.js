import React from "react";

class App extends React.Component {
    state={
        data:'',
        display:true,
    }
    handleChange = (e) => {
        const { maxLength, value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
    
        let fieldIntIndex = parseInt(fieldIndex, 16);
        
    
        // Check if no of char in field == maxlength
        if (value.length >= maxLength) {
    
        // It should not be last input field
        if (fieldIntIndex < 5) {
            this.state.data+=value;
            // Get the next input field using it's name
            const nextfield = document.querySelector(
            `input[name=field-${fieldIntIndex + 1}]`
            );
    
            // If found, focus the next field
            if (nextfield !== null) {
            nextfield.focus();
            }
        }
        }
    };
    
    printdata=()=>{
        console.log(this.state.data);
        this.setState({
            display:false,
        })
    }
    
    deleteData=()=>{
        this.setState({
            data:'',
            display:true,
        })
    }

    render() {
        return (
        <div>
            <h2>Card Number * </h2>
            <InputFild name="field-1" length="4"
                    handleChange={this.handleChange} />
            <InputFild name="field-2" length="4"
                    handleChange={this.handleChange} />
            <InputFild name="field-3" length="4"
                    handleChange={this.handleChange} />
            <InputFild name="field-4" length="4"
                    handleChange={this.handleChange} />
            <br /><br />
            <button type="submit" onClick={this.printdata}  >submit</button>
            {
                this.state.display ? null
                :
                <div>
                <button onClick={this.deleteData} >Delete</button>
                <h3>{this.state.data}</h3>
                </div>
            }
        </div>
        );
    }
}



export default App;
