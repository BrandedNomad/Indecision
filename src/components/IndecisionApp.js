//Import React
import React from 'react';


//Import components
import Header from './Header'
import AddOption from './AddOption'
import Options from './Options'
import Option from './Option'
import Action from './Action'
import OptionModal from "./OptionModal";



class IndecisionApp extends React.Component {

    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleRemoveOption = this.handleRemoveOption.bind(this)
        this.handleClearPick = this.handleClearPick.bind(this)
        this.state={
            options:this.props.options,
            selectedOption:undefined
        }
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(options){
                this.setState(()=>({options}));
            }
        }catch(e){

        }



    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
            console.log('saving data')
        }
    }

    handlePick(){
        let randomIndex =  Math.floor(this.state.options.length * Math.random())
        let randomItem = this.state.options[randomIndex];
        this.setState(()=>{
            return {
                selectedOption:randomItem
            }
        }

    )}

    handleClearPick(e){
        this.setState((prevState)=>{
            return {
                selectedOption:undefined
            }
        })
    }





    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }

        this.setState((prevState)=>{

            return{
                options:prevState.options.concat([option])
            }
        })
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }

    handleRemoveOption(option){
        this.setState((prevState)=>{
            return{
                options:prevState.options.filter((items)=>{
                    return items !==option
                })
            }
        })
    }

    render(){
        const title = "Indecision App"
        const subtitle = "Put your life in the hands of a computer"


        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleRemoveOption = {this.handleRemoveOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearPick ={this.handleClearPick}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:[]
}







export default IndecisionApp;

