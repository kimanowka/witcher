import React,{useState} from 'react';



const AccountPage = () => {

    const [auth,setAuth] =useState(false)



    return (
        <div className='height100vh'>
            <section>
                <h1> its AccountPage Page</h1>
                {auth && <div>
                    iTS ACCOUNT ADM
                </div>}
                <button onClick={() => {setAuth(true)}}>login</button>
            </section>
        </div>
    )
}

export default AccountPage;