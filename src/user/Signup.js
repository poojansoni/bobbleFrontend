import React, {useState} from "react";
import "../styles.scss"
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import $ from "jquery"

const Signup = () =>{
    const responseGoogle = (response)=>{
        console.log(response)
    }
    const responseFacebook = (response) => {
        console.log(response);
      }

      const success = ()=>{
          alert("sent")
      }

      const submit = () => {
        $.ajax({
            url: "https://reqres.in/api/users",
            type: "POST",
            data: $("form").serialize()
                ,
            success: function(response){
                console.log(response);
            }
        });
        if(success){
            alert("Registered Successfully")
        }
        else{
            alert("Unable to Register")
        }
      }
    return(
        
        <div>
        <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTD7GIMzIFXk0JqwoR85LgDXNraPIrIk8aEFA&usqp=CAU"></img></div>
            <div className="outside">
            <div className="container-outside">
                    <h2 className=" signup font-weight-bold">SIGN UP</h2>
                    <p className=" createAccount">Create your account</p>
                    <p className="font-weight-light lorem">lorem ipsum dolor sit amet , consectetur adipiscing elit</p>
                    <div className="logIn">
                    <GoogleLogin
                        clientId="1092005889144-3k0asaflpjh4celjmgm7smn01t4un772.apps.googleusercontent.com"
                        buttonText="sign up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                        <button>
                        <FacebookLogin
                        appId="367457397580401"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={success}
                        callback={responseFacebook}
                    />
                        </button>
                    </div>
                    <div className="or">
                        <hr></hr><h1>or</h1><hr></hr>
                    </div>
                    <form className="forms" method="post">
                        <div className="form-froup">
                            <input className="form-control" name="firstName" type="text" placeholder="First Name" required />
                        </div>
                        <div className="form-froup">
                            <input className="form-control" name="lastName" type="text" placeholder="Last Name" required />
                        </div>
                        <div className="form-froup">
                            <input className="form-control" name="email" id="email" type="email" placeholder="Email" required />
                        </div>
                        <div className="form-froup">
                            <input className="form-control" name="password" type="password" placeholder="Password" required />
                        </div>
                    </form>
                    <div className="terms">
                        <p>By clicking Sign Up, you agree to our <span>Terms of Use</span> and our <span>Privacy Policy</span></p>
                    </div>
                    
                    <button onClick={submit}><h1>SIGN UP</h1></button>
        
            </div>
            </div>
        </div>
    )

}


export default Signup