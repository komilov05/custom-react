import React from './lib/react.js'
import ReactDOM from './lib/ReactDOM.js'
import Navbar from './components/navbar/Navbar.js'
import Header from './components/header/header.js'
const App = () => {
    return (
        <div className='app'>
            <Navbar/>
            <Header
                title='Hello Custom React Library'
                desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, odit.'
                links={
                    [
                        {href: 'read-more',title:'Read More'},
                        {href: 'Contact',title:'Contact Us'}
                    ]
                }
                
                />
                
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))