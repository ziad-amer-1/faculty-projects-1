import PersonIcon from "../../assets/person.svg"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { useRef } from "react"
import { useState } from "react"
import { toast } from "react-toastify"

function Login() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const [inputValue, setInputValue] = useState("")

  function handleLoginFormSubmit(e) {
    e.preventDefault()
    const userInputValue = inputRef.current?.value.trim()
    if (userInputValue === "") {
      toast.error("يجب عليك ادخال الرقم القومي")
      return
    }
    if (isNaN(userInputValue)) {
      toast.error("يجب ان يحتوي هذا الحقل علي ارقام فقط")
      return
    }
    if (userInputValue.length < 14) {
      toast.error("يجب ان لا يقل هذا الحقل علي اقل من 14 رقم")
      return
    }
    // code here for post request to api
    navigate("/home")
  }

  return (
    <section className="login-section-container">
      <div className="login-right"></div>
      <div className="login-left">
        <div className="form-login-container">
          <h2>
            آهلا وسهلاً بكم في منصة <br />
            خدمات كلية حاسبات ومعلومات طنطا
          </h2>
          <form className="form-login" onSubmit={handleLoginFormSubmit}>
            <div className="input-container">
              <div className="person-icon">
                <img src={PersonIcon} alt="person icon" />
              </div>
              <input
                type="text"
                placeholder="الرقم القومي /رقم جواز السفر"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => {
                  if (e.target.value.length > 14) return
                  return setInputValue(e.target.value)
                }}
              />
            </div>
            <button>دخول</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
