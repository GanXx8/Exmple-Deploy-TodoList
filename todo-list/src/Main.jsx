import React, { Component } from "react"
import List from "./component-list/list"
import ResultPage from "./Pages/About"

class Main extends Component{
    constructor(){
        super()
        this.state = {
            change: '',
            todo: []
        }
    }

    submit = sum => {
        sum.preventDefault();
        this.setState( state => {
            return{
                todo: [...state.todo, this.state.change]
            }
        }, /*() => console.log (this.state)*/)
    }

    onChange = sum => {
        this.setState({ ...this.state, change: sum.target.value})
    }

    hasilList = () =>{
        this.state.todo.map(el => <List todo ={el}/>)
    }

    render(){
        return(
            <>
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" required onChange={this.onChange} placeholder='catat disini'/>
                    {/* <button type="submit">Cetak</button> */}
                    <input type="submit" value="Cetak!" />
                </form>
                    <ol>
                        {this.state.todo.map(el =><List todo ={el}/>)}
                    </ol>
            </div>
            </>
        )
    }
}

export default Main;
