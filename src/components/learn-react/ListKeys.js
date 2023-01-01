import react from "react";
export default class ListKeys extends react.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((number, i) => <li key={i}>{number}</li>);
        return(
           <div className={'number-keys'}>
              <ul>{doubled}</ul>
           </div>
        )
    }

}