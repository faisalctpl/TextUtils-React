import React,{} from 'react';

export default function About(props) {

    // const [myStyle, setMyStyle] =useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#1e609b',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white',
        border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'black'
    }
    return (
        <div className='container' >
            <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'#1e609b'}}>About us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                         <strong>  Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Text analysis (TA) is a machine learning technique used to automatically extract valuable insights from unstructured text data.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        More broadly, they pledged to work together to uphold the international order in which countries can choose their own path, free from undue...
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                           <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Test, test, test: Schedule in regular testing to ensure your site always stays compatible, and plan time for additional testing whenever you make significant updates to your site. Make sure to test with as wide a range of browsers as possible, including both older and newer versions, and versions for different devices.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
