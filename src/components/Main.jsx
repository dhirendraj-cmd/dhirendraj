import { NavLink } from "react-router"

function Main() {

    return (
        <>
           <br/>
           <div className="text-center">
                <p className="text-2xl text-white">Hi, Welcome to my folio</p>
                <p className="text-4xl text-white">I am, Dhirendra,
                    <span style={{fonstyle: 'italic', color: 'green', padding: "5px", fontWeight: "bold"}}>
                        A Full Stack Software Engineer
                    </span> 
                </p>
                <p className="text-3xl text-white">I can help you turn your ideas in to 
                    <span style={{padding: "5px", color: "green", fontStyle: "italic", fontWeight: "bold"}}>
                        Reality
                    </span>
                </p>
           </div>
           <br/>
           <div className="text-center">
            <NavLink to="/connect">
                <button className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 cursor-pointer">
                    Let's Connect
                </button> 
            </NavLink>
           </div>
           
        </>
    )
    
}

export default Main