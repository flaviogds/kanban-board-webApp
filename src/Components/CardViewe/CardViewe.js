import React, { Component }from 'react';
import { v4 as uuidv4 } from 'uuid';

import './CardViewe.css';

export default class CardViewe extends Component{  
    render(){
        return (
            <>
                <div className="viewe" style={{background: this.props.card.properties.color}} key={uuidv4()}>
                    <div className="controlViewe">
                        {this.props.children}
                    </div>
                    <div style={{color: this.props.card.properties.colorFont}} className="headerViewe">
                        {this.props.card.initial
                            ? <span className="dateViewe">Data Inicial: {this.props.card.initial}</span>
                            : null
                        }
                        {this.props.card.final
                            ? <span className="dateViewe">Previsão: {this.props.card.final}</span>
                            : null
                        }
                    </div>
                    <span className="priorityViewe">
                            Prioridade: <span>{(this.props.card.priority)}</span>
                    </span>
                    <div> 
                        <p className="description">
                            {this.props.card.description}
                        </p>
                    </div>
                </div>
            </>
        );
    }
};