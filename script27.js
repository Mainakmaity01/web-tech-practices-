/*setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(rahul)  
            }, 100)
    }
    catch(err){
            console.log("Balle balle")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
    }, 4000) 
    */

    /*
    try {
        let age = prompt("Enter your age")
        age = Number.parseInt(age) 
        if(age>50){
        throw new ReferenceError("This is probably not true")
        }
} catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
}

console.log("The script is still running")
*/

/*Finally*/ 

const f = () => {
        try {
                let a = 0;
                // console.log(program)
                console.log("Program ran successfully")
                return
        }
        catch (err) {
                console.log("This is an error")
                console.log(p)
        }
        finally {
                console.log("I am a good boy")
                // Close the file
                // Exit the Loop
                // Write to the log file
        }
}

f()
console.log("End")
