import React, { Component } from 'react'

import FruitItem from './FruitItem'

class Fruits extends Component {

    state = {
        newFruits: '0',
        fruits: []
    }


    componentDidMount() {
      const fruits = localStorage.getItem('fruits')

      if(fruits) {
        this.setState({fruits: JSON.parse(fruits)})
      }

    }

    componentDidUpdate(_, state) {
      if(state.fruits !== this.state.fruits) {
        localStorage.setItem('fruits', JSON.stringify(this.state.fruits))
      }
    }

    handleChange = e => {
        this.setState({newFruits: e.target.value})
    }

    handleSubmit = e => {
      e.preventDefault()

      this.setState({fruits: [...this.state.fruits, this.state.newFruits], newFruits: ''})


      console.log(this.state.fruits)
    }

    handleDelete = (item) => {
      this.setState({ fruits: this.state.fruits.filter(f => f !== item) })
    }

    render() {
        return(
            <div className="box">
              <div className="content">
                <form onSubmit={this.handleSubmit}>
                  <ul>
                    {this.state.fruits.map(item => (
                        <FruitItem 
                          fruit={item} 
                          key={item}
                          onDelete={() => this.handleDelete(item)}
                        />
                    ))}
                  </ul>
                  <input
                    onChange={this.handleChange} 
                    type="text" 
                    value={this.state.newFruits}
                  />
                  <input type="submit"/>
                </form>
              </div>
            </div>
        )
    }

}

export default Fruits;