import React from 'react'
import { MyConsumer } from './MyContext'

export default function People() {

    return (
        <MyConsumer>
            {context =>

                <div>
                    <h2>My Name:  {context.state.person.name}</h2>
                    <button onClick={context.toggleName}>Change Name</button>
                    <br/>
                    <h2>Age: {context.state.person.age}</h2>
                    <button onClick={context.getOlder}>getOlder</button>
                </div>
            }
        </MyConsumer>
    )
}
