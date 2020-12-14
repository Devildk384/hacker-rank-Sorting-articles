import React,{useState} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";



function App({articles}) {

    const [sorted, setSorted] = useState(0)

    const sortedArticles = function(){
        if(sorted === 0){
           let r =  articles.sort((a,b) => ((a.upvotes > b.upvotes) ? -1 : 1))
           return r;
        }else{
            let r =   articles.sort((a,b) => ((a.date > b.date) ? -1 : 1))
            return r;
        }
    }

    articles  = sortedArticles();
    


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={()=>setSorted(0)}  data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={()=>setSorted(1)}  data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={articles}/>
        </div>
    );

}

export default App;
